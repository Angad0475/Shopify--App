import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 function checkout() {
    const onToken =(token)=>{
        console.log(token);
    }
  return (
    <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51PbdZeRrGYISZzeVZDI8810oLCJX6QxD3toFBoeYYuSr352umcMMDyCrOwTy6egCgIrYnUfQrWGJ4XkAVn0SzjVC00w9SGuQBM"
      />
  )
}
export default checkout;
