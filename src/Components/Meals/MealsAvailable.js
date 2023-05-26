/** @format */

import React, { useEffect, useState } from "react";
import classes from ".././Meals/MealsAvailable.module.css";
import MealItem from "./MealItem";
import useHttpRequest from "../../Hooks/use-http";

const MealsAvailable = () => {
  const [fetchedData, setFetchedData] = useState([]);

  const { error, isLoading, fetchData } = useHttpRequest();

  const handlerFetchedData = (data) => {
    let n = [];

    for (const key in data) {
      n.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }
    setFetchedData(n);
  };

  useEffect(() => {
    fetchData(
      {
        url: "https://testpj-02-default-rtdb.firebaseio.com/Meals.json",
      },
      handlerFetchedData
    );
  }, [fetchData]);

  const listedMeals = fetchedData.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        name={meal.name}
        describtion={meal.describe}
        price={meal.price}
        id={meal.id}
      />
    );
  });
  return (
    <section className={classes["available-meals"]}>
      <ul className={classes.meals}>{listedMeals}</ul>
    </section>
  );
};

export default MealsAvailable;
