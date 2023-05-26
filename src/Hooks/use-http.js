/** @format */

import React, { useState, useCallback } from "react";

const useHttpRequest = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async (requestConfigue, handlerDta = null) => {
    setIsLoading(true);
    try {
      const res = await fetch(requestConfigue.url, {
        method: requestConfigue.method ? requestConfigue.method : "GET",
        body: requestConfigue.body ? requestConfigue.body : null,
        headers: requestConfigue.headers ? requestConfigue.headers : {},
      });

      if (!res.ok) {
        throw new Error("something went wrong");
      }
      const data = await res.json();

      handlerDta && handlerDta(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  return { fetchData, error, isLoading };
};

export default useHttpRequest;
