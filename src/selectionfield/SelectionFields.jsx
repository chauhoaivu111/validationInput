import React, { useState } from "react";
import keyOption from "./keydata";
import "../image/VNR.jpg";

const SelectFields = [
  {
    selection: 1,
    name: "flower",
    option: ["Rose", "Chrysanthemum", "Lily", "Orchid"],
  },
  {
    selection: 2,
    name: "color",
    option: ["Đỏ", "Hồng", "Tím ", "vàng", "Trắng", "Hồng"],
  },
  { selection: 3, name: "field3", option: ["USA", "VN"] },
];

function SelectionFields() {
  // get default value
  const listDefault = {};
  SelectFields.forEach((item) => {
    listDefault[item.name] = item.option[0];
  });

  console.log(listDefault);

  const [selectedValues, setSelectedValues] = useState(listDefault);

  const handleChange = (e, name) => {
    const values = e.target.value;
    setSelectedValues((prvState) => ({
      ...prvState,
      [name]: values,
    }));
  };

  console.log(selectedValues);

  const checkOption = (check) => {
    for (const [key, contense] of keyOption) {
      if (key.every((option) => check.includes(option))) {
        return contense;
      }
    }

    return "";
  };
  // get only value from object
  const getcontenceValue = Object.values(selectedValues);
  console.log(typeof getcontenceValue);

  return (
    <div>
      {SelectFields.map((item, index) => (
        <div key={index.selection}>
          <select
            value={selectedValues[item.name] || item.option[0]}
            onChange={(e) => handleChange(e, item.name)}
          >
            {item.option.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
      ))}

      {checkOption(getcontenceValue) ? (
        <img src={checkOption(getcontenceValue)} alt="" />
      ) : (
        <h1>Not found</h1>
      )}
    </div>
  );
}

export default SelectionFields;
