import React, { useState } from "react";
import SelectFields from "./selectionfield/selectdata";
import keyOption from "./selectionfield/keydata";

function Test() {
  const defaultSelectedOptions = {};
  SelectFields.forEach((field) => {
    defaultSelectedOptions[field.name] = field.value;
  });

  console.log(defaultSelectedOptions);

  const [selectedOptions, setSelectedOptions] = useState(
    defaultSelectedOptions
  );

  const handleOptionChange = (name, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const checkMatchingOption = (selected) => {
    for (const [options, content] of keyOption) {
      if (options.every((option) => selected.includes(option))) {
        return content;
      }
    }
    return "";
  };

  const selectedOptionValues = Object.values(selectedOptions);

  return (
    <div>
      {SelectFields.map((field, index) => (
        <div key={field.name}>
          <select
            value={selectedOptions[field.name] || field.value}
            onChange={(e) => handleOptionChange(field.name, e.target.value)}
          >
            {field.option.map((option, optionIndex) => (
              <option key={optionIndex} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}

      {checkMatchingOption(selectedOptionValues) ? (
        <h1>{checkMatchingOption(selectedOptionValues)}</h1>
      ) : (
        "not found"
      )}
    </div>
  );
}

export default Test;
