import React from "react";
import "./Stripe.css";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

const Stripe = ({
  handlePayment,
  setPaymentError,
  setPaymentSuccess,
  price,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      handlePayment(paymentMethod.id);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "grid" }}>
        <label>
          Card number
          <CardNumberElement />
        </label>
        <label>
          Expiration date
          <CardExpiryElement />
        </label>
        <label>
          CVC
          <CardCvcElement />
        </label>
        <button className="pay-button" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default Stripe;
