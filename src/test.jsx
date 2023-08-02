import React, { useState, useEffect, useCallback } from 'react';

import data from "./data"

const Test = () => {
  const [selectedValues, setSelectedValues] = useState({
    country: "",
    flower: "",
    color: ""
  });
  const [showOnlyOneCountry, setShowOnlyOneCountry] = useState(false);

  useEffect(() => {
    setSelectedValues(prevSelectedValues => ({
      ...prevSelectedValues,
      country: data.countryData[0].CountryId,
      flower: data.flowerData.find(state => state.CountryId.includes(data.countryData[0].CountryId))?.flowerId || "",
      color: data.colorData.find(color => color.ColorIds.includes((data.flowerData.find(state => state.CountryId.includes(data.countryData[0].CountryId))?.flowerId) || ""))?.colorName || ""
    }));
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    if (name === "country") {
      setSelectedValues(prevSelectedValues => ({
        ...prevSelectedValues,
        country: value,
        flower: data.flowerData.find(state => state.CountryId.includes(value))?.flowerId || "",
        color: data.colorData.find(color => color.ColorIds.includes((data.flowerData.find(state => state.CountryId.includes(value))?.flowerId) || ""))?.colorName || ""
      }));
    } else if (name === "flower") {
      setSelectedValues(prevSelectedValues => ({
        ...prevSelectedValues,
        flower: value,
        color: data.colorData.find(color => color.ColorIds.includes(value))?.colorName || ""
      }));
    } else {
      setSelectedValues(prevSelectedValues => ({
        ...prevSelectedValues,
        color: value
      }));
    }
  }, []);

  const filteredStates = data.flowerData.filter(state => state.CountryId.includes(selectedValues.country));
  const filteredCities = data.colorData.filter(city => city.ColorIds.includes(selectedValues.flower));
  const filteredFlowers = showOnlyOneCountry ? filteredStates.filter(state => state.CountryId.length === 1) : filteredStates;

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showOnlyOneCountry}
          onChange={(e) => setShowOnlyOneCountry(e.target.checked)}
        />
        Show flowers with a single country
      </label>
  
      {Object.keys(selectedValues).map((selectKey, index) => (
        <div key={index}>
          <select name={selectKey} value={selectedValues[selectKey]} onChange={handleChange}>
            {selectKey === 'country' && data.countryData.map(country => (
              <option key={country.CountryId} value={country.CountryId}>{country.CountryName}</option>
            ))}
            {selectKey === 'flower' && filteredFlowers.map(state => (
              <option key={state.flowerId} value={state.flowerId}>{state.flowerName}</option>
            ))}
            {selectKey === 'color' && filteredCities.map(city => (
              <option key={city.colorName} value={city.colorName}>{city.colorName}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default Test;
