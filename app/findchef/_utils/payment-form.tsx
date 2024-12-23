import { useState, useEffect } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function PaymentForm({
  amount,
  onSuccess,
  onCancel,
}: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (amount < 0.5) {
      setMessage("Minimum payment amount is $0.50");
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/booking/confirmation`,
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message ?? "An unexpected error occurred.");
    } else if (paymentIntent && paymentIntent.status === "requires_capture") {
      setIsSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 2000); // Close the form after 2 seconds
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsProcessing(false);
  };
  const modalContent = isSuccess ? (
    <Card className="w-full max-w-md">
      <CardContent className="pt-6 text-center">
        <CheckCircle className="mx-auto text-green-500 w-16 h-16 mb-4" />
        <CardTitle className="text-2xl font-bold mb-2">
          Payment Successful!
        </CardTitle>
        <p className="text-gray-600">Thank you for your payment.</p>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-sm text-gray-500">Powered by Stripe</p>
      </CardFooter>
    </Card>
  ) : (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Complete Your Payment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          {message && (
            <div className="mt-4 text-red-500" role="alert">
              {message}
            </div>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="flex justify-between w-full">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={isProcessing} onClick={handleSubmit}>
            {isProcessing ? "Processing..." : `Pay $${amount.toFixed(2)}`}
          </Button>
        </div>
        <p className="text-sm text-blue-600 text-center">Powered by Stripe</p>
      </CardFooter>
    </Card>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        {modalContent}
      </div>
    </div>
  );
}
