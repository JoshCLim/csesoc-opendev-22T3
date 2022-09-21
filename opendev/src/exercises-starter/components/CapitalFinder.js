// Exercises 2 and 3

import { useState } from "react";
import { fetchCountryInfo } from "../utils";

/**
 * Displays the capital city of a given country.
 */
const CapitalFinder = () => {
  const [location, setLocation] = useState({
    country: "australia",
    countryInfo: {
      capital: ["Canberra"],
    },
  });

  const updateInfo = async (country) => {
    const countryInfo = await fetchCountryInfo(country);
    return { country: country, countryInfo: countryInfo };
  };

  const updateLocation = async (query) => {
    const newLocation = await updateInfo(query);
    setLocation(newLocation);
  };

  const handleOnSubmit = () => {};

  return (
    <div>
      <h2>Capital Finder</h2>
      <button onClick={() => updateLocation("australia")}>Australia</button>
      <button onClick={() => updateLocation("canada")}>Canada</button>
      <button onClick={() => updateLocation("new zealand")}>New Zealand</button>
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="search"></input>
        <input type="submit"></input>
      </form>
      <p>
        The capital city of {location.country} is{" "}
        {location.countryInfo?.capital[0]}.
      </p>
    </div>
  );
};

export default CapitalFinder;
