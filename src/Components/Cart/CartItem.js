/** @format */

import React from "react";
import classes from "../Cart/CartItem.module.css";
const CartItem = ({ name, price, amount, onAdd, id, onRemove }) => {
  const handlerSumButton = () => {
    onAdd({ id: id, amount: +amount + 1 });
  };

  const handlerSubButton = () => {
    onRemove({ id: id, amount: +amount - 1 });
  };
  return (
    <>
      {amount > 0 && (
        <li className={classes["meal-list"]}>
          <div className={classes["left-coloumn"]}>
            <h2>{name}</h2>
            <div className={classes.info}>
              <span className={classes["meal-price"]}>${price}</span>
              <span className={classes["meal-amount"]}>x{amount}</span>
            </div>
          </div>
          <div className={classes["right-coloumn"]}>
            <button className={classes.sum} onClick={handlerSumButton}>
              +
            </button>
            <button className={classes.sub} onClick={handlerSubButton}>
              -
            </button>
          </div>
        </li>
      )}
    </>
  );
};

export default CartItem;
