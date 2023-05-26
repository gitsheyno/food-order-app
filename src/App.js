/** @format */
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import MyProvider from "./Store/MyProvider";

function App() {
  const [cartIsShown, setCrtIsShown] = useState(false);
  const handlerCartVisibility = () => {
    setCrtIsShown((prev) => {
      return !prev;
    });
  };

  return (
    <MyProvider>
      <div className="App">
        {cartIsShown && <Cart handlerCartVisibility={handlerCartVisibility} />}
        <Header handlerCartVisibility={handlerCartVisibility} />
        <main>
          <Meals />
        </main>
      </div>
    </MyProvider>
  );
}

export default App;
