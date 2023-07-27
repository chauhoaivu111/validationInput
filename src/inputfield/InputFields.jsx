import React, { useState } from "react";
import listinput from "./data";





function InputFields() {
  const [inputField, setInputField] = useState(listinput);

  const handleChange = (e, index) => {
    const values = e.target.value;
    setInputField((prvState) => {
      const setField = [...prvState];
      setField[index].value = values;
      return setField;
    });
  };

  const validationPhone = (phone) => {
    const checkphone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return checkphone.test(phone);
  };
  const validationMail = (mail) => {
    const checkmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return checkmail.test(mail);
  };

  const errorMesseges = (type, value, error) => {
    if (value !== "") {
      if (type === "Num" && isNaN(value)) {
        return <p style={{ color: "red" }}>{error}</p>;
      } else if (type === "Phone" && !validationPhone(value)) {
        return <p style={{ color: "red" }}>{error}</p>;
      } else if (type === "Email" && !validationMail(value)) {
        return <p style={{ color: "red" }}>{error}</p>;
      } else if (!isNaN(value) && !type) {
        return <p style={{ color: "red" }}>{error}</p>;
      }
    }
  };

  return (
    <div>
      {inputField.map((item, index) => (
        <div key={index}>
          <label htmlFor={item.name}>{item.label}</label>
          <input
            id={item.name}
            value={item.value}
            onChange={(e) => handleChange(e, index)}
          />
          {errorMesseges(item.type, item.value, item.error)}
        </div>
      ))}
    </div>
  );
}

export default InputFields;
