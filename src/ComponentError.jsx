import React,{useContext} from 'react';
import { ErrorContext } from './Provider';

const ComponentError = () => {

    const {errorMessages} = useContext(ErrorContext)
    console.log("error",errorMessages)
  return (
    <div>
        
        { Object.keys(errorMessages).map((item) => (
            <div key={item}> {errorMessages[item]}</div>
        )) }
        
    </div>
  )
}

export default ComponentError