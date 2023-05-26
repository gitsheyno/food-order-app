/** @format */

import React, { useContext } from "react";
import MealForm from "./MealForm";
import classes from ".././Meals/MealItem.module.css";
import MyContext from "../../Store/MyContext";

const MealItem = ({ name, describtion, price, id }) => {
  const { handlerAddMealToCart } = useContext(MyContext);
  const helper = (amount) => {
    handlerAddMealToCart({
      name,
      describtion,
      price,
      id,
      amount,
    });
  };

  return (
    <li className={classes.list}>
      <div className={classes.content}>
        <h4>{name}</h4>
        <p>{describtion}</p>
        <p>${price}</p>
      </div>
      <MealForm helper={helper} />
    </li>
  );
};

export default MealItem;
