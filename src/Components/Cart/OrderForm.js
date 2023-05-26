/** @format */

import React, { useState, useContext } from "react";
import classes from ".././Cart/OrderForm.module.css";
import useValidator from "../../Hooks/use-validator";
import useHttpRequest from "../../Hooks/use-http";
import MyContext from "../../Store/MyContext";
const OrderForm = ({ showFormHandler, setIsSubmitting, setDidSubmit }) => {
  const { addMeal, handlerClearCart } = useContext(MyContext);

  const { error, isLoading, fetchData: handlerPostData } = useHttpRequest();
  const {
    enteredValue: enteredName,
    enteredValueIsNotValied: enteredNameIsNotValied,
    enteredValueIsValied: enteredNameIsValied,
    handlerChange: handlerNameChange,
    handlerInputBlur: handlerInputNameBlur,
    reset: resetName,
    setInputTouched: setNameTouched,
  } = useValidator((name) => {
    return name.trim() !== "";
  });
  const {
    enteredValue: enteredNumber,
    enteredValueIsNotValied: enteredNumberIsNotValied,
    enteredValueIsValied: enteredNumberIsValied,
    handlerChange: handlerNumberChange,
    handlerInputBlur: handlerInputNumberBlur,
    reset: resetNumber,
    setInputTouched: setNumberTouched,
  } = useValidator((number) => {
    return number.trim() !== "";
  });
  const {
    enteredValue: enteredAddress,
    enteredValueIsNotValied: enteredAddressIsNotValied,
    enteredValueIsValied: enteredAddressIsValied,
    handlerChange: handlerAddressChange,
    handlerInputBlur: handlerInputAddressBlur,
    reset: resetAddress,
    setInputTouched: setAddressTouched,
  } = useValidator((address) => {
    return address.trim() !== "";
  });
  const {
    enteredValue: enteredPostal,
    enteredValueIsNotValied: enteredPoastalIsNotValied,
    enteredValueIsValied: enteredPostalIsValied,
    handlerChange: handlerPostalChange,
    handlerInputBlur: handlerInputPostalBlur,
    reset: resetPostal,
    setInputTouched: setPostalTouched,
  } = useValidator((postal) => {
    return postal.trim() !== "";
  });

  const handlerSubmitForm = (e) => {
    e.preventDefault();

    setAddressTouched(true);
    setNameTouched(true);
    setNumberTouched(true);
    setPostalTouched(true);

    const formIsValied =
      enteredAddress && enteredName && enteredNumber && enteredPostal;

    if (!formIsValied) {
      return;
    }
    setIsSubmitting(true);
    setDidSubmit(false);

    handlerPostData({
      url: "https://testpj-02-default-rtdb.firebaseio.com/Orders.json",
      method: "POST",
      body: JSON.stringify({
        orderItems: addMeal,
        orderInfo: {
          name: enteredName,
          address: enteredAddress,
          number: enteredNumber,
          postal: enteredPostal,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsSubmitting(false);

    setDidSubmit(true);
    resetAddress();
    resetName();
    resetPostal();
    resetNumber();

    handlerClearCart();
  };

  // const inputNameClass = `${
  //   enteredNameIsNotValied ? "form-control invalid" : "form-control"
  // }`;

  return (
    <form className={classes["form-group"]} onSubmit={handlerSubmitForm}>
      <div /*className={classes[`${inputNameClass}`]}*/>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={enteredName}
          onChange={handlerNameChange}
          onBlur={handlerInputNameBlur}
        />
        {enteredNameIsNotValied && (
          <span className={classes["text-error"]}>*</span>
        )}
      </div>
      <div>
        <label htmlFor="mobile">Phone No</label>
        <input
          id="mobile"
          type="number"
          value={enteredNumber}
          onChange={handlerNumberChange}
          onBlur={handlerInputNumberBlur}
        />
        {enteredNumberIsNotValied && (
          <span className={classes["text-error"]}>*</span>
        )}
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          value={enteredAddress}
          onChange={handlerAddressChange}
          onBlur={handlerInputAddressBlur}
        />
        {enteredAddressIsNotValied && (
          <span className={classes["text-error"]}>*</span>
        )}
      </div>
      <div>
        <label htmlFor="postal">Postal Code</label>
        <input
          id="postal"
          type="number"
          value={enteredPostal}
          onChange={handlerPostalChange}
          onBlur={handlerInputPostalBlur}
        />
        {enteredPoastalIsNotValied && (
          <span className={classes["text-error"]}>*</span>
        )}
      </div>
      <div className={classes["form-action"]}>
        <button type="submit">Order</button>
        <button type="button" onClick={showFormHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
