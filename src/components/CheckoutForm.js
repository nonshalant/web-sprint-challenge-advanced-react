import React, { useState } from "react";
import useCheckOutForm from "../hooks/useForm";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook


const CheckoutForm = (props) => {

  return (
    <>
      <form onSubmit={useCheckOutForm(handleSubmit)}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={useCheckOutForm(handleChanges)}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={useCheckOutForm(handleChanges)}
          />
        </label>
        <label>
          City:
          <input name="city" value={values.city} onChange={useCheckOutForm(handleChanges)} />
        </label>
        <label>
          State:
          <input name="state" value={values.state} onChange={useCheckOutForm(handleChanges)} />
        </label>
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={useCheckOutForm(handleChanges)} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
