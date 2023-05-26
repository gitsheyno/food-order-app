/** @format */

import React, { useContext } from "react";
import classes from "../Layout/Header.module.css";
import backImg from "../../Assets/meals.jpg";
import HeaderCartBtn from "./HeaderCartBtn";
import MyContext from "../../Store/MyContext";

const Header = ({ handlerCartVisibility }) => {
  const { addMeal } = useContext(MyContext);
  return (
    <>
      <header>
        <h3 className={classes.logo}>Food Order</h3>
        <HeaderCartBtn
          handlerCartVisibility={handlerCartVisibility}
          addMeal={addMeal}
        />
      </header>
      <div className={classes.image}>
        <img src={backImg} />
      </div>
    </>
  );
};

export default Header;
