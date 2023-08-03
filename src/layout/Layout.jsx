import React from "react";
import InputFields from "../components/Inputfield/InputFields";
import CheckError from "../components/Inputfield/CheckError";
import SelectionField from "../components/Selectionfield/SelectionFields";
import CascadingSelect from "../components/Selectionfield/CascadingSelect";

const Layout = () => {
  return (
    <>
      <div>
        <InputFields />
        <CheckError />
      </div>
      <div>
        <SelectionField />
        <CascadingSelect />
      </div>
    </>
  );
};

export default Layout;
