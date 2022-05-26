import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../../Shared/Spinner/Spinner";

const CheckoutFrom = ({ order }) => {
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  const { price, name, email, _id } = order;
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
        console.log(data);
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setProcessing(true);
    if (error) {
      setCardError(error?.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    const { paymentIntent, error: ententError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (ententError) {
      setProcessing(false);
      setCardError(ententError.message);
    } else {
      setTransactionId(paymentMethod.id);
      setCardError("");
      toast.success("Congrats! Your Payment SuccessFull");
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };
      console.log(payment);
      fetch(`http://localhost:5000/order/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };
  if (processing) {
    return <Spinner />;
  }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {cardError && (
        <p className="text-red-500 font-bold mt-2 text-left">{cardError}</p>
      )}
      <button
        className="btn btn-warning w-full mt-7 font-bold text-white"
        type="submit"
        disabled={!stripe || !clientSecret || transactionId}
      >
        Pay Now
      </button>
      {transactionId && (
        <p className="mt-2">
          Your TransactionId:{" "}
          <span className="font-bold text-orange-500">{transactionId}</span>
        </p>
      )}
    </form>
  );
};

export default CheckoutFrom;
