import React, { useState } from 'react';
import validKeys from '../data';
import "../inputfield/InputField.scss"

const initialState = {
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    currentState1: "",
    currentState2: "",
    currentState3: "",
    currentState4: "",
    information: "",
    fillout: "",
};
const inputFields = [
    { label: "Name of pet", name: "input1" },
    { label: "Color of pet", name: "input2" },
    { label: "Gender of pet", name: "input3" },
    { label: "Kg of pet", name: "input4" },
    { label: "casi j day", name: "input5" },
];
const App = () => {
    const [state, setState] = useState(initialState);

    const handleChange = (e, inputName) => {
        const value = e.target.value;
        setState((prevState) => ({
            ...prevState,
            [inputName]: value,
        }));
    };

    const handleClick = () => {
        const { input1, input2, input3, input4 } = state;

        // check input empty
        if (!input1 || !input2 || !input3 || !input4) {
            setState((prevState) => ({
                ...prevState,
                fillout: "Please fill all input",
                information: "",
                currentState1: "",
                currentState2: "",
                currentState3: "",
                currentState4: "",
            }));

        }
        else if (isNaN(input1) && isNaN(input2) && isNaN(input3) && isNaN(input4)) {
            setState((prevState) => ({
                ...prevState,
                currentState1: "",
                currentState2: "",
                currentState3: "",
                currentState4: "",
            }))
            const userInput = [input1, input2, input3, input4]
            let match = false

            for (const [key, contence] of validKeys) {

                if (JSON.stringify(key) === JSON.stringify(userInput)) {
                    setState((prevState) => ({
                        ...prevState,
                        information: contence

                    }))
                    match = true
                    break
                }

                if (match === false) {
                    setState((prevState) => ({
                        ...prevState,
                        information: "not found",
                        fillout: ""
                    }))
                }
            }

        }
        else {
            setState((prevState) => ({
                ...prevState,
                information: "",
                fillout: "",
                currentState1: !isNaN(input1) ? "name of pet must be a string. " : "",
                currentState2: !isNaN(input2) ? "color of pet must be a string. " : "",
                currentState3: !isNaN(input3) ? "male of pet must be a string. " : "",
                currentState4: !isNaN(input4) ? "kg of pet must be a string. " : "",

            }))
        }

    };

    return (

        <div className='main_frame_input'>
            <div className='frame_input' >
                {inputFields.map((item, index) => (

                    <div key={index}>
                        <label htmlFor={item.name}>{item.label}</label>
                        <input value={state[item.name]} onChange={(e) => handleChange(e, item.name)}  ></input>
                    </div>

                ))}

                <div>
                    <button onClick={handleClick}>send</button>
                </div>
            </div>

            <div className="frame_information">
                {
                    state.fillout ||
                        state.currentState1 ||
                        state.currentState2 ||
                        state.currentState3 ||
                        state.currentState4 !== "" ||
                        state.information === "not found" ?
                        <div className='alert_error1'>
                            <div className='icons'>
                                <h1>!</h1>
                            </div>
                            <div className='infor_fillout'>
                                <h3>Invalidation</h3>
                                <p>{state.information}{state.fillout}
                                    {state.currentState1} {state.currentState2}
                                    {state.currentState3} {state.currentState4}
                                </p>
                            </div>

                        </div> : ""
                }

                {
                    state.information !== "not found" ?
                        <div className='frame_infordata'>

                            <p>{state.information}</p>

                        </div> : ""
                }


            </div>
        </div>
    );
}

export default App;


