import React from "react";
import InputFields from "../components/Inputfield/InputFields";
import ComponentError from "../components/Error/ComponentError";
import SelectionField from "../components/Selectionfield/SelectionFields";
import CascadingSelect from "../components/Selectionfield/CascadingSelect";

function Layout() {
  return (
    <div>
      <div>
        <InputFields />
        <ComponentError />
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
