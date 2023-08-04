import React, { useContext } from "react";
import { ErrorContext } from "../../Provider";
import "./ComponentError.scss";

const ComponentError = () => {
  const { errorMessages } = useContext(ErrorContext);
  // console.log("error",errorMessages)

  const checkundefined = Object.values(errorMessages).every(
    (value) => typeof value === "undefined"
  );
  return (
    <div>
      {checkundefined ? (
        ""
      ) : (
        <div className="main_frame_errors">
          <h1>!</h1>
          <div className="frame_errors">
          <h2>invalid</h2>
          <div className="each_error">
          {Object.keys(errorMessages).map((item) => (
            <p key={item}  >{errorMessages[item]}</p>
          ))}
          </div>
         
          </div>
         
        </div>
      )}
    </div>
  );
};

export default ComponentError;
