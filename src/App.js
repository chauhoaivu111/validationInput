/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './App.css'
import InputFields from './inputfield/InputFields';
import SelectionFields from './selectionfield/SelectionFields';
import Component_error from './component_error';



function App() {
  

  return (
    <div>

      <InputFields/>
      <Component_error/>
      <SelectionFields/>
    
      
    </div>
  );
}

export default App;
