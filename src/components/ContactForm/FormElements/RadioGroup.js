import { useState } from 'react';

const RadioGroup = (props) => {
    const [communicationChannel, setCommunicationChannel] = useState(props.defaultChecked);

    const handleChange = (value) => {
        setCommunicationChannel(value);
        props.onChange(value);
    };

    return (
        <div className={`form-element form__element form-element_select`}>
            {props.inputList.map((elem, index) => {
                return (
                    <label
                        htmlFor={`radio_${elem.value}`}
                        className={`form-element__label form-element__label_select`}
                        key={index}
                    >
                        <input
                            type="radio"
                            name={'communication-channel'}
                            id={`radio_${elem.value}`}
                            checked={communicationChannel === elem.value}
                            onChange={() => handleChange(elem.value)}
                        />
                        {elem.name}
                    </label>
                );
            })}
        </div>
    );
};
export default RadioGroup;
