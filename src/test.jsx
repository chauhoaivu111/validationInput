import React, { useState, useEffect } from 'react';

const data = {
  countryData: [
    { CountryName: "Australia", CountryId: "2" },
    { CountryName: "United States", CountryId: "1" },
  ],
  stateData: [
    { StateName: "New York", CountryIds: ["1"], StateId: "101" },
    { StateName: "Virginia", CountryIds: ["1"], StateId: "102" },
    { StateName: "Tasmania", CountryIds: ["2", "1"], StateId: "105" },
  ],
  cityData: [
    { CityName: "Albany", StateIds: ["101"], CityId: 201 },
    { CityName: "Beacon", StateIds: ["101"], CityId: 202 },
    { CityName: "Emporia", StateIds: ["102"], CityId: 206 },
    { CityName: "Hampton", StateIds: ["102"], CityId: 205 },
    { CityName: "Hobart", StateIds: ["105", "101"], CityId: 213 },
    { CityName: "Launceston", StateIds: ["105"], CityId: 214 },
  ],
};

const Test = () => {
  const [selectedValues, setSelectedValues] = useState({
    country: "",
    state: "",
    city: ""
  });

  // Populate the initial state with default values for each dropdown
  useEffect(() => {
    setSelectedValues(prevSelectedValues => ({
      ...prevSelectedValues,
      country: data.countryData[0].CountryId,
      state: data.stateData.find(state => state.CountryIds.includes(data.countryData[0].CountryId))?.StateId || "",
      city: data.cityData.find(city => city.StateIds.includes((data.stateData.find(state => state.CountryIds.includes(data.countryData[0].CountryId))?.StateId) || ""))?.CityId || ""
    }));
  }, [data]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "country") {
      setSelectedValues({
        country: value,
        state: data.stateData.find(state => state.CountryIds.includes(value))?.StateId || "",
        city: ""
      });
    } else if (name === "state") {
      setSelectedValues({
        ...selectedValues,
        state: value,
        city: ""
      });
    } else {
      setSelectedValues({
        ...selectedValues,
        city: value
      });
    }
  };

  // Get filtered state options based on the selected country
  const filteredStates = data.stateData.filter(state => state.CountryIds.includes(selectedValues.country));

  // Get filtered city options based on the selected state
  const filteredCities = data.cityData.filter(city => city.StateIds.includes(selectedValues.state));

  return (
    <div>
      {
        Object.keys(selectedValues).map((selectKey, index) => (
          <div key={index}>
            <select name={selectKey} value={selectedValues[selectKey]} onChange={handleChange}>
              <option value="">{selectKey}</option>
              {selectKey === 'country' && data.countryData.map(country => (
                <option key={country.CountryId} value={country.CountryId}>{country.CountryName}</option>
              ))}
              {selectKey === 'state' && filteredStates.map(state => (
                <option key={state.StateId} value={state.StateId}>{state.StateName}</option>
              ))}
              {selectKey === 'city' && filteredCities.map(city => (
                <option key={city.CityId} value={city.CityId}>{city.CityName}</option>
              ))}
            </select>
          </div>
        ))
      }
    </div>
  );
};

export default Test;
