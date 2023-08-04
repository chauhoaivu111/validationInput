import React, { useState } from "react";
import SelectFields from "./data";
import "./SelectionField.scss";
import keyOption from "./keydata"

const checkValueMatched = (array, object) => {
  // Find object in array check for each item in array
  const findItem = array.find((item) =>
    Object.entries(object).every(([key, value]) => item[key] === value)
  );
  return findItem ? findItem.images : "";
};
function SelectionField() {
  const listDefault = Object.keys(SelectFields).reduce((name, key) => {
    name[key] = SelectFields[key].option[0];
    return name;
  }, {});

  const [selectedValues, setSelectedValues] = useState(listDefault);

  const handleChange = (e, name) => {
    const values = e.target.value;
    setSelectedValues((prevState) => ({
      ...prevState,
      [name]: values,
    }));
  };
const result = checkValueMatched(keyOption, selectedValues);

  return (
    <div className="main_frame_selection">
      <div className="first_frame">
        {Object.keys(SelectFields).map((key) => (
          <div key={key} className="frame_selection">
            <select
              value={selectedValues[key]}
              onChange={(e) => handleChange(e, key)}
            >
              {SelectFields[key].option.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className="second_frame">
       {result ? <img src={result} alt="" /> : <h1>Not found</h1>}
      </div>
    </div>
  );
}

export default SelectionField;
