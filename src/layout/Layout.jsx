import React from "react";
import InputFields from "../components/Inputfield/InputFields";
import ComponentError from "../components/Error/ComponentError";
import SelectionField from "../components/Selectionfield/SelectionFields";
import CascadingSelect from "../components/Cascadingselect/CascadingSelect";
import "./Layout.scss"

function Layout() {
  return (
    <div className="layout">
      <div className="input_error">
        <div className = "inputComponent" >
          <InputFields/>
        </div>
        <div className = "errorcComponent" >
          <ComponentError/>
        </div>
      </div>
      <div>
        <SelectionField />
      </div>
      <div>
        <CascadingSelect />
      </div>
    </div>
  );
}

export default Layout;
