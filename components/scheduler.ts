import cron from 'node-cron';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const schedulePaymentCapture = (paymentIntentId: string, captureDate: Date) => {
  const job = cron.schedule('0 0 * * *', async () => {
    const now = new Date();
    if (now >= captureDate) {
      try {
        await stripe.paymentIntents.capture(paymentIntentId);
        console.log(`PaymentIntent ${paymentIntentId} captured successfully.`);
        job.stop();
      } catch (error) {
        console.error(`Failed to capture PaymentIntent ${paymentIntentId}:`, error);
      }
    }
  });

  job.start();
};