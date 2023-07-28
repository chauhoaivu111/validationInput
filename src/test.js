import React, { useState } from "react";
import keyOption from "./selectionfield/keydata";
import SelectFields from "./selectionfield/data";


function Test() {
  // get default value
  const listDefault = {};
  SelectFields.forEach((item) => {
    listDefault[item.name] = item.option[0];
  });

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

export default Test;


