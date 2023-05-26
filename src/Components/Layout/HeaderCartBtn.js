/** @format */
import React, { useContext } from "react";
import classes from "../Layout/HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import MyContext from "../../Store/MyContext";
const HeaderCartBtn = ({ handlerCartVisibility }) => {
  const { addMeal } = useContext(MyContext);
  const handlerClickButton = () => {
    handlerCartVisibility();
  };
  const total = addMeal.reduce((acc, el) => {
    return acc + el.amount;
  }, 0);
  return (
    <button className={classes["header-btn"]} onClick={handlerClickButton}>
      <span className={classes.badge}>
        <CartIcon />
      </span>
      <span className={classes["cart-text"]}>Your Cart</span>
      <span className={classes["cart-amount"]}>{total}</span>
    </button>
  );
};

export default HeaderCartBtn;
