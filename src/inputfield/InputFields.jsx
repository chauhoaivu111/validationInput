/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import listinput from "./data";
import "../inputfield/InputField.scss";
import Check_error from "./CheckError";


function InputFields() {
  const [inputField, setInputField] = useState(listinput);

  const handleChange = (e, index) => {
    const values = e.target.value;
    setInputField((prevState) => {
      const setField = [...prevState];
      setField[index].value = values;
      return setField;
    });
  };

  return (

      <div>
        {inputField.map((item, index) => (
          <div key={index} className="frame_input_label">
            <div>
              <label htmlFor={item.name}>{item.label}</label>
            </div>
            <input
              id={item.name}
              value={item.value}
              onChange={(e) => handleChange(e, index)}
            />
            <div className="frame_error">
             
              <Check_error type = {item.type} value ={item.value} error ={item.error}/>
            </div>
          </div>
        ))}

        
      </div>

  );
}

export default InputFields;
