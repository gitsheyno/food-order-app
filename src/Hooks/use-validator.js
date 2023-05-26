/** @format */

import React, { useState } from "react";

const useValidator = (validator) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const handlerChange = (e) => {
    setEnteredValue(e.target.value);
  };

  const handlerInputBlur = (e) => {
    setInputTouched(true);
  };
  const enteredValueIsValied = validator(enteredValue);
  const enteredValueIsNotValied = inputTouched && !enteredValueIsValied;

  const reset = () => {
    setEnteredValue("");
    setInputTouched(false);
  };
  return {
    enteredValue,
    reset,
    setInputTouched,
    enteredValueIsValied,
    enteredValueIsNotValied,
    handlerChange,
    handlerInputBlur,
  };
};
export default useValidator;
