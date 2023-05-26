/** @format */

import React, { useContext, useState } from "react";
import Modal from "../../Portals/Modal";
import classes from "../Cart/Cart.module.css";
import CartItem from "./CartItem";
import MyContext from "../../Store/MyContext";
import OrderForm from "./OrderForm";

const Cart = ({ handlerCartVisibility }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const showFormHandler = () => {
    setShowForm((prev) => {
      return !prev;
    });
  };
  const { addMeal, onAdd, totalAmount, onRemove } = useContext(MyContext);

  const handlerCloseBtn = () => {
    handlerCartVisibility();
  };

  const listedMeals = (
    <ul className={classes["cart-ul"]}>
      {addMeal.map((meal) => {
        return (
          <CartItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            price={meal.price}
            amount={meal.amount}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        );
      })}
    </ul>
  );
  const cartDidSubmit = (
    <>
      <p>succseccfully sent of the order </p>
      <div className={classes["cart-btn"]}>
        <button className={classes.close} onClick={handlerCloseBtn}>
          Close
        </button>
      </div>
    </>
  );
  const cartContent = (
    <>
      {listedMeals}
      <div className={classes["default-preview"]}>
        <h3>Total Amount</h3>
        <p>${totalAmount}</p>
      </div>
      {!showForm && (
        <div className={classes["cart-btn"]}>
          <button className={classes.close} onClick={handlerCloseBtn}>
            Close
          </button>
          <button onClick={showFormHandler} className={classes.confirm}>
            Confirm
          </button>
        </div>
      )}
      {showForm && (
        <OrderForm
          showFormHandler={showFormHandler}
          MyContext={MyContext}
          setDidSubmit={setDidSubmit}
          setIsSubmitting={setIsSubmitting}
        />
      )}
    </>
  );

  return (
    <Modal>
      {!isSubmitting && !didSubmit && cartContent}
      {didSubmit && !isSubmitting && cartDidSubmit}
    </Modal>
  );
};

export default Cart;
