import React, { useEffect, useState } from "react";
import { fetchCountries } from "../api/test"; // 👈 import here

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCountries();
      if (data) setCountries(data);
    };

    getData();
  }, []);

  return (
    <div>
      <h2>Countries:</h2>
      <pre>{JSON.stringify(countries, null, 2)}</pre>
    </div>
  );
};

export default CountryList;
