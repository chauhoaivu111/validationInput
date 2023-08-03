import React, { useState, useEffect, useMemo } from 'react';
import data from "../data";

const CascadingSelect = () => {
  const [selectedValues, setSelectedValues] = useState({
    country: '',
    flower: '',
    color: ''
  });

  const firstCountryId = useMemo(() => (data.countryData.length > 0 ? data.countryData[0].CountryId : ''), []);
  const firstFlowerId = useMemo(() => (data.flowerData.length > 0 ? data.flowerData[0].flowerId : ''), []);
  const firstColor = useMemo(() => (data.colorData.length > 0 ? data.colorData[0].colorName : ''), []);

  // Update initial values
  useEffect(() => {
    setSelectedValues({
      country: firstCountryId,
      flower: firstFlowerId,
      color: firstColor
    });
  }, [firstCountryId, firstFlowerId, firstColor]);


  

  // Memoize filtered data
  const filteredFlowerData = useMemo(() => {
    return data.flowerData.filter((flower) => flower.CountryId.includes(selectedValues.country));
  }, [selectedValues.country]);

  const filteredColorData = useMemo(() => {
    return data.colorData.filter((color) => color.ColorIds.includes(selectedValues.flower));
  }, [selectedValues.flower]);

  // Handler for select changes
  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectedValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  // Get the names of the selected country and flower
  const selectedCountryName = useMemo(() => {
    const country = data.countryData.find((country) => country.CountryId === selectedValues.country);
    return country ? country.CountryName : '';
  }, [selectedValues.country]);

  const selectedFlowerName = useMemo(() => {
    const flower = data.flowerData.find((flower) => flower.flowerId === selectedValues.flower);
    return flower ? flower.flowerName : '';
  }, [selectedValues.flower]);

  // Update filteredFlowerData whenever selectedValues.country changes
  useEffect(() => {
    const filteredFlowerData = data.flowerData.filter((flower) => flower.CountryId.includes(selectedValues.country));
    setSelectedValues(prevValues => ({
      ...prevValues,
      flower: filteredFlowerData.length > 0 ? filteredFlowerData[0].flowerId : '',
    }));
  }, [selectedValues.country]);

  // Update filteredColorData whenever selectedValues.flower changes
  useEffect(() => {
    const filteredColorData = data.colorData.filter((color) => color.ColorIds.includes(selectedValues.flower));
    setSelectedValues(prevValues => ({
      ...prevValues,
      color: filteredColorData.length > 0 ? filteredColorData[0].colorName : '',
    }));
  }, [selectedValues.flower]);

  return (
    <div>
      {Object.keys(selectedValues).map((selectKey, index) => (
        <div key={index}>
          <select name={selectKey} value={selectedValues[selectKey]} onChange={handleSelectChange}>
            {selectKey === 'country' && data.countryData.map(country => (
              <option key={country.CountryId} value={country.CountryId}>{country.CountryName}</option>
            ))}
            {selectKey === 'flower' && filteredFlowerData.map(flower => (
              <option key={flower.flowerId} value={flower.flowerId}>{flower.flowerName}</option>
            ))}
            {selectKey === 'color' && filteredColorData.map(color => (
              <option key={color.colorName} value={color.colorName}>{color.colorName}</option>
            ))}
          </select>
        </div>
      ))}
      <div>
        {selectedCountryName}, {selectedFlowerName}, {selectedValues.color || 'None'}
      </div>
    </div>
  );
};

export default CascadingSelect;
