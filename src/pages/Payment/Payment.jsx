import "./Payment.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("tu_clave_publica_de_stripe");

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      borderBottom: "1px solid #495057",
      lineHeight: "24px",
      fontFamily: "Arial, sans-serif",
      fontSize: "16px",
      color: "#495057",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const CheckoutForm = ({ total }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement,
      billing_details: {
        name,
      },
    });

    if (error) {
      setError(error.message);
    } else {
      console.log(paymentMethod);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="payment">
        <div className="form-row">
          <div className="input-payment">
            <label>CARD NUMBER</label>
            <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
          </div>

          <div className="input-payment">
            <label>EXPIRED DATE</label>
            <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
          </div>
        </div>

        <div className="form-row">
          <input
            id="name"
            type="text"
            required
            placeholder="CARD HOLDER"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-name"
          />

          <div className="input-cvc">
            <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
          </div>
        </div>

        {error && <div className="error">{error}</div>}
      </form>
      <div className="total-row">
        <div className="total">TOTAL: ${total} </div>
        <div type="submit" disabled={!stripe} className="continue">
          CONTINUE
        </div>
      </div>
    </>
  );
};

const PaymentForm = () => {
  const location = useLocation();
  const total = location.state?.total;
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm total={total} />
    </Elements>
  );
};

export default PaymentForm;
