/** @format */

import React, { useReducer } from "react";
import MyContext from "./MyContext";

const defaultObj = {
  items: [],
  totalAmount: 0,
};

const reducerFunc = (state, action) => {
  if (action.type === "add") {
    console.log(state, action);

    const updatedItems = state.items.map((item) => {
      return item.id === action.item.id
        ? { ...item, amount: action.item.amount }
        : item;
    });

    const updatedTotalAmount = updatedItems
      .reduce((acc, meal) => {
        return acc + meal.price * meal.amount;
      }, 0)
      .toFixed(2);

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === "remove") {
    const updatedItems = state.items.map((item) => {
      return item.id === action.item.id
        ? { ...item, amount: action.item.amount }
        : item;
    });

    const updatedTotalAmount = updatedItems
      .reduce((acc, meal) => {
        return acc + meal.price * meal.amount;
      }, 0)
      .toFixed(2);

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === "ADD-FROM-HOME") {
    const foundedIndex = state.items.findIndex((meal) => {
      return action.item.id === meal.id;
    });

    if (foundedIndex === -1) {
      const updatedItems = [...state.items, action.item];
      const updatedTotalAmount = updatedItems
        .reduce((acc, meal) => {
          return acc + meal.price * meal.amount;
        }, 0)
        .toFixed(2);
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    const updatedItems = state.items.map((meal) => {
      return meal.id === action.item.id
        ? { ...meal, amount: +meal.amount + +action.item.amount }
        : meal;
    });

    const updatedTotalAmount = updatedItems
      .reduce((acc, meal) => {
        return acc + meal.price * meal.amount;
      }, 0)
      .toFixed(2);

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === "CLEAR") {
    return defaultObj;
  }

  return defaultObj;
};

const MyProvider = (props) => {
  const [cartReducer, cartDispatch] = useReducer(reducerFunc, defaultObj);
  const handlerAddMealToCart = (newMeal) => {
    cartDispatch({ type: "ADD-FROM-HOME", item: newMeal });
  };

  const handlerSum = (addedMeal) => {
    console.log(addedMeal);
    cartDispatch({ type: "add", item: addedMeal });
  };

  const handlerSub = (reducedMeal) => {
    cartDispatch({ type: "remove", item: reducedMeal });
  };

  const handlerClearCart = () => {
    cartDispatch({ type: "CLEAR" });
  };

  const val = {
    handlerAddMealToCart,
    addMeal: cartReducer.items,
    onAdd: handlerSum,
    onRemove: handlerSub,
    totalAmount: cartReducer.totalAmount,
    handlerClearCart: handlerClearCart,
  };
  return <MyContext.Provider value={val}>{props.children}</MyContext.Provider>;
};

export default MyProvider;
