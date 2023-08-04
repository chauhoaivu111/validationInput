import React, { useState, useEffect, useMemo } from "react";
import "./CascadingSelect.scss";
import data from "./data";

const CascadingSelect = () => {
  const [selectedValue, setSelectedValue] = useState({
    country: "",
    flower: "",
    color: "",
  });

  //  set default values
  useEffect(() => {
    setSelectedValue({
      country: data.countryData.length > 0 ? data.countryData[0].CountryId : "",
      flower: data.flowerData.length > 0 ? data.flowerData[0].flowerId : "",
      color: data.colorData.length > 0 ? data.colorData[0].colorName : "",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filterFLowerData = useMemo(() => {
    return data.flowerData.filter((id) =>
      id.CountryId.includes(selectedValue.country)
    );
  }, [selectedValue.country]);

  const filterColorData = useMemo(() => {
    return data.colorData.filter((id) =>
      id.ColorIds.includes(selectedValue.flower)
    );
  }, [selectedValue.flower]);

  // update name flower
  useEffect(() => {
    const updateFlower = data.flowerData.filter((id) =>
      id.CountryId.includes(selectedValue.country)
    );

    setSelectedValue((prevState) => ({
      ...prevState,
      flower: updateFlower.length > 0 ? updateFlower[0].flowerId : "",
    }));
  }, [selectedValue.country]);
  // update name color
  useEffect(() => {
    const updateColor = data.colorData.filter((id) =>
      id.ColorIds.includes(selectedValue.flower)
    );
    setSelectedValue((prevState) => ({
      ...prevState,
      color: updateColor.length > 0 ? updateColor[0].colorName : "",
    }));
  }, [selectedValue.flower]);

  return (
    <div className="main_frame_cascading">
      <div className="frame_cascadingcelect">
        <div className="casadings">
          {Object.keys(selectedValue).map((item, index) => (
            <div key={index}>
              <select
                name={item}
                onChange={handleChange}
                value={selectedValue[item]}
              >
                {item === "country" &&
                  data.countryData.map((item) => (
                    <option key={item.CountryId} value={item.CountryId}>
                      {item.CountryName}
                    </option>
                  ))}
                {item === "flower" &&
                  filterFLowerData.map((item) => (
                    <option key={item.flowerId} value={item.flowerId}>
                      {item.flowerName}
                    </option>
                  ))}
                {item === "color" &&
                  filterColorData.map((item) => (
                    <option key={item.ColorIds} value={item.colorName}>
                      {item.colorName}
                    </option>
                  ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      <div className="frame_result">
        <p> <span>Coutry: </span> {data.countryData.find((item) => item.CountryId === selectedValue.country)?.CountryName}</p>

        <p><span>Flower: </span> {data.flowerData.find((item) => item.flowerId === selectedValue.flower)?.flowerName}</p>

        <p><span>Color: </span> {selectedValue.color}</p>
      </div>
    </div>
  );
};

export default CascadingSelect;
