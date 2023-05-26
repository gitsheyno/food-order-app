/** @format */

import React, { useRef } from "react";
import classes from ".././Meals/MealForm.module.css";
const MealForm = ({ helper }) => {
  const inputRef = useRef();

  const handlerForm = (e) => {
    e.preventDefault();

    const amountEnteredStr = inputRef.current.value;
    const amountEnteredNum = +amountEnteredStr;

    // handlerAddMealToCart(amountEnteredNum);

    helper(amountEnteredNum);
  };

  return (
    <form className={classes["meal-form"]} onSubmit={handlerForm}>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          ref={inputRef}
          type="number"
          step="1"
          min="1"
          max="5"
          defaultValue="1"
        />
      </div>
      <button className={classes.btn}>+Add</button>
    </form>
  );
};

export default MealForm;
