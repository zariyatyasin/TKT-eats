import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = headers().get('stripe-signature')!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        webhookSecret
      );
    } catch (err: any) {
      console.error(`⚠️  Webhook signature verification failed.`, err.message);
      return NextResponse.json({ error: err.message }, { status: 400 });
    }

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

      console.log("this is",paymentIntent);
      

        if (paymentIntent.status === 'requires_capture') {
          await handlePaymentRequiresCapture(paymentIntent);
        } else {
          await handlePaymentIntentSucceeded(paymentIntent);
        }
        break;

      case 'payment_intent.payment_failed':
        const failedPaymentIntent = event.data.object as Stripe.PaymentIntent;
        await handlePaymentFailed(failedPaymentIntent);
        break;

      case 'payment_intent.canceled':
        const canceledPaymentIntent = event.data.object as Stripe.PaymentIntent;
        await handlePaymentCanceled(canceledPaymentIntent);
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
        
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error('Webhook error:', err);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

async function handlePaymentIntentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  // Update order status in your database
  try {
    const orderId = paymentIntent.metadata.orderId;
    if (orderId) {
      // Update your order status to 'paid' or 'captured'
      await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/order/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId,
          status: 'paid',
          paymentIntentId: paymentIntent.id,
        }),
      });
    }
  } catch (error) {
    console.error('Error updating order status:', error);
  }
}

async function handlePaymentFailed(paymentIntent: Stripe.PaymentIntent) {
  try {
    const orderId = paymentIntent.metadata.orderId;
    if (orderId) {
      // Update order status to 'payment_failed'
      await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/order/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId,
          status: 'payment_failed',
          paymentIntentId: paymentIntent.id,
        }),
      });
    }
  } catch (error) {
    console.error('Error updating failed payment status:', error);
  }
}

async function handlePaymentCanceled(paymentIntent: Stripe.PaymentIntent) {
  try {
    const orderId = paymentIntent.metadata.orderId;
    if (orderId) {
      // Update order status to 'canceled'
      await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/order/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId,
          status: 'canceled',
          paymentIntentId: paymentIntent.id,
        }),
      });
    }
  } catch (error) {
    console.error('Error updating canceled payment status:', error);
  }
}

async function handlePaymentRequiresCapture(paymentIntent: Stripe.PaymentIntent) {
  try {
    const orderId = paymentIntent.metadata.orderId;
    if (orderId) {
      // Update order status to 'authorized'
      await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/order/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId,
          status: 'authorized',
          paymentIntentId: paymentIntent.id,
        }),
      });
    }
  } catch (error) {
    console.error('Error updating authorized payment status:', error);
  }
} 