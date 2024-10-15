import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './CSS/Checkout.scss';

function Checkout() {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div className="checkout-container">
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51PbdZeRrGYISZzeVZDI8810oLCJX6QxD3toFBoeYYuSr352umcMMDyCrOwTy6egCgIrYnUfQrWGJ4XkAVn0SzjVC00w9SGuQBM"
      />
    </div>
  );
}

export default Checkout;