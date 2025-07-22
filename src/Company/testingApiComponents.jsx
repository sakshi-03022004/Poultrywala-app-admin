import React, { useEffect } from "react";
import { fetchCountries } from "../api/test";

const TestComponent = () => {
  useEffect(() => {
    const callAPI = async () => {
      const res = await fetchCountries();
      console.log("Countries:", res);
    };

    callAPI();
  }, []);

  return <h3>Check Console for Country List</h3>;
};

export default TestComponent;
