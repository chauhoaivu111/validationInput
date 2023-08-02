import React, { useState, useEffect, useCallback } from 'react';
import data from "../data"

const CascadingSelect = () => {

  const [selectedValues, setSelectedValues] = useState({});
  const [showOnlyOneCountry, setShowOnlyOneCountry] = useState(false);

  
  useEffect(() => {
    // set default value
    const countryId = data.countryData[0]?.CountryId || "";
    const flowerData = data.flowerData;
    const colorData = data.colorData;
    const flowerId = flowerData.find(flower => flower.CountryId.includes(countryId))?.flowerId || "";
    const colorName = colorData.find(color => color.ColorIds.includes(flowerId))?.colorName || "";

    setSelectedValues(prevSelectedValues => ({
      ...prevSelectedValues,
      country: data.countryData[0].CountryId,
      flower: flowerId,
      color: colorName,
    }));
  }, []);
  

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setSelectedValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  
  // find id 
  const filteredFlowers = showOnlyOneCountry
  ? data.flowerData.filter(({ CountryId }) => CountryId.includes(selectedValues.country) && CountryId.length === 1)
  : data.flowerData.filter(({ CountryId }) => CountryId.includes(selectedValues.country));
  const filterColor = data.colorData.filter(({ ColorIds }) => ColorIds.includes(selectedValues.flower));  
 
  console.log(selectedValues.country)
  console.log(selectedValues.flower)
  console.log(filteredFlowers.color)


 
  
  return (
    <div>
      {Object.keys(selectedValues).map((selectKey, index) => (
        <div key={index}>
          <select name={selectKey}  onChange={handleChange}>
            {selectKey === 'country' && data.countryData.map(country => (
              <option key={country.CountryId} value={country.CountryId}>{country.CountryName}</option>
            ))}
            {selectKey === 'flower' && filteredFlowers.map(state => (
              <option key={state.flowerId} value={state.flowerId}>{state.flowerName}</option>
            ))}
            {selectKey === 'color' && filterColor.map(city => (
              <option key={city.colorName} value={city.colorName}>{city.colorName}</option>
            ))}
          </select>
        </div>
      ))}

      <div>
        <div>
          {selectedValues.CountryName},
          {selectedValues.flowerName},
          {selectedValues.color}
        </div>
      <label>
        <input
          type="checkbox"
          checked={showOnlyOneCountry}
          onChange={(e) => setShowOnlyOneCountry(e.target.checked)}
        />
        Show flowers with a single country
      </label>
      </div> 
    </div>
  );
};

export default CascadingSelect;
