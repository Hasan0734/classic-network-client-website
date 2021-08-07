import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import Stripe from "../Stripe/Stripe";

const ProccessPayment = ({
  handlePayment,
  price,
  setPaymentError,
  setPaymentSuccess,
}) => {
  const stripePromise = loadStripe(
    "pk_test_51J9iFXEdTZX2Ev8ogUfZQP9Nko7rLsT2yGjlhv8uyEpx91qaBe91vVWtIff0nHRmUgZLMdSA9X0jspfP4EN0Gjnr00D7gCBYJJ"
  );

  return (
    <>
      <div className="method col-md-4 col-sm-12">
        <div>
          <span className="text-secondary">Pay with</span>
          <div className="d-flex justify-content-evenly">
            <div className="d-flex align-items-baseline">
              <input
                className="me-2"
                id="stripe"
                name="payment"
                value="stripe"
                type="radio"
                checked
              />
              <label for="stripe">Credit card</label>
            </div>
            <div className="d-flex align-items-baseline">
              <input
                className="me-2"
                id="paypal"
                name="payment"
                value="paypal"
                type="radio"
              />
              <label for="paypal">Paypal</label>
            </div>
          </div>
        </div>
        <Elements stripe={stripePromise}>
          <Stripe
            handlePayment={handlePayment}
            price={price}
            setPaymentSuccess={setPaymentSuccess}
            setPaymentError={setPaymentError}
          ></Stripe>
        </Elements>
      </div>
    </>
  );
};

export default ProccessPayment;
