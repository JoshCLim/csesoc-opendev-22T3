// Exercises 2 and 3

import { useState } from 'react';
import { fetchCountryInfo } from '../utils';

/**
 * Displays the capital city of a given country.
 */
const CapitalFinder = () => {
  const [query, setQuery] = useState('australia');
  const [country, setCountry] = useState(null);

  // FIXME: Prevent the infinite render loop with useEffect
  const updateInfo = async () => {
    const countryInfo = await fetchCountryInfo(query);
    setCountry(countryInfo);
  };

  // updateInfo();

  console.log('Country:', country);

  return (
    <div>
      <h2>Capital Finder</h2>
      <button onClick={() => setQuery('australia')}>Australia</button>
      <button onClick={() => setQuery('canada')}>Canada</button>
      <button onClick={() => setQuery('new zealand')}>New Zealand</button>
      <p>The capital city of COUNTRY is CITY.</p>
    </div>
  );
};

export default CapitalFinder;
