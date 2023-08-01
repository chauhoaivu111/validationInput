import React, { useState } from 'react';

const Test = () => {
  const data = {
    countryData: [
      { CountryName: 'Australia', CountryI: '2' },
      { CountryName: 'United States', CountryI: '1' }
    ],
    stateData: [
      { StateName: 'New York', CountryId: '1', StateId: '101' },
      { StateName: 'Virginia', CountryId: '1', StateId: '102' },
      { StateName: 'Tasmania', CountryId: '2', StateId: '105' }
    ],
    cityData: [
      { CityName: 'Albany', StateId: '101', CityId: 201 },
      { CityName: 'Beacon', StateId: '101', CityId: 202 },
      { CityName: 'Emporia', StateId: '102', CityId: 206 },
      { CityName: 'Hampton', StateId: '102', CityId: 205 },
      { CityName: 'Hobart', StateId: '105', CityId: 213 },
      { CityName: 'Launceston', StateId: '105', CityId: 214 }
    ]
  };

  const [selectedValues, setSelectedValues] = useState({
    country: "",
    state: "",
    city: ""
  });

  const handleChange = (event) => {
    setSelectedValues({
      ...selectedValues,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      {
        Object.keys(selectedValues).map((selectKey, index) => (
        
          <div key={index}>
            <select name={selectKey} value={selectedValues[selectKey]} onChange={handleChange}>
              <option value="">Select {selectKey}</option>
              {
                data[`${selectKey}Data`].map((item) => (
                  <option key={item[`${selectKey}Id`]} value={item[`${selectKey}Id`]}>
                    {item[`${selectKey}Name`]}
                  </option>
                ))

              
              
              }
            </select>
          </div>
        ))
      }
    </div>
  );
};

export default Test;
