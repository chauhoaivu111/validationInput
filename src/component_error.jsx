import React,{useContext} from 'react';
import { ErrorContext } from './Provider';

const Component_error = () => {

    const {errorMessages} = useContext(ErrorContext)
    console.log("fff",errorMessages)
  return (
    <div>
        
        { Object.keys(errorMessages).map((item) => (
            <div key={item}> {errorMessages[item]}</div>
        )) }
        
    </div>
  )
}

export default Component_error