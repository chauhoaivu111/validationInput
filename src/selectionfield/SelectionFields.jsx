import React, { useState } from "react";
import keyOption from "./keydata";
import SelectFields from "./data";
import "./SelectionField.scss"


function SelectionField() {
  
  const listDefault = SelectFields.reduce((name, item) => {
    name[item.name] = item.option[0];
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

  const checkValueMatched = (array,object) => {
  
    console.log(object)
    // find object in array check for each item in array
    const findItem = array.find((item) => 
     Object.entries(object).every(([key,value]) => item[key] === value))

     console.log(findItem)
      return findItem ? findItem.images : ""
 
  }
  const result = checkValueMatched(keyOption, selectedValues)
  console.log(result)

  
  return (
    <div className="main_frame_selection">
      <div className="first_frame">
        {SelectFields.map((item) => (
          <div key={item.name} className="frame_selection">
            <select
              value={selectedValues[item.name]}
              onChange={(e) => handleChange(e, item.name)}
            >
              {item.option.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className="second_frame">
        {result ? (
          <img src={result} alt="" />
        ) : (
          <h1>Not found</h1>
        )}
      </div>
    </div>
  );
}

export default SelectionField;


