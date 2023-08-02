/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './App.css'
import CascadingSelect from './selectionfield/CascadingSelect';
import InputFields from './inputfield/InputFields';
import SelectionFields from './selectionfield/SelectionFields';
import Component_error from './ComponentError';
// import Test from './test';





function App() {
  

  return (
    <div>
      {/* <div>
      <InputFields/>
      <Component_error/>
      </div>

      <div>
      <SelectionFields/>
      </div> */}
      
      {/* <Test/> */}
      <CascadingSelect/>
   
    
      
    </div>
  );
}

export default App;
