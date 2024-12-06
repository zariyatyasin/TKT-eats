import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { 
      amount, 
      bookingDate, 
      customerDetails, // New: Accept customer details
      capture_method 
    } = await req.json();
     
    // Create or retrieve a Stripe Customer
    let customer;
    try {
      // Try to find existing customer by email
      const customers = await stripe.customers.list({
        email: customerDetails.email,
        limit: 1,
      });
      
      customer = customers.data[0] || await stripe.customers.create({
        email: customerDetails.email,
        name: customerDetails.name,
        phone: customerDetails.phone,
        address: {
          line1: customerDetails.address,
        },
        metadata: {
          userId: customerDetails.userId || '', // If you have a user ID
        },
      });
    } catch (error) {
      console.error('Error managing customer:', error);
      throw error;
    }

    // Create a PaymentIntent with manual capture
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,  
      currency: 'usd',
      capture_method: 'manual',
      customer: customer.id, // Attach the customer
      metadata: {
        bookingDate: bookingDate,
        customerName: customerDetails.name,
        customerEmail: customerDetails.email,
        customerPhone: customerDetails.phone,
        customerAddress: customerDetails.address,
        userId: customerDetails.userId || '',
      },
      receipt_email: customerDetails.email, // Send receipt to customer
      description: `Booking for ${bookingDate}`, // Add description
    });

    return NextResponse.json({ 
      clientSecret: paymentIntent.client_secret,
      customerId: customer.id 
    });
  } catch (error) {
    console.error('Payment Intent Error:', error);
    return NextResponse.json(
      { error: 'Error creating payment intent' },
      { status: 500 }
    );
  }
}