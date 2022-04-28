import { useState } from 'react';

const RadioGroup = (props) => {
    const [communicationChannel, setCommunicationChannel] = useState(props.defaultChecked);

    const handleChange = (value) => {
        setCommunicationChannel(value);
        props.onChange(value);
    };

    return (
        <div className={`form-element form__element radio-group`}>
            {props.inputList.map((elem, index) => {
                return (
                    <div key={index} className={`radio-group__element`}>
                        <input
                            type="radio"
                            name={'communication-channel'}
                            id={`radio_${elem.value}`}
                            checked={communicationChannel === elem.value}
                            onChange={() => handleChange(elem.value)}
                            className={`radio-group-element__input`}
                        />
                        <label
                            htmlFor={`radio_${elem.value}`}
                            className={`radio-group-element__label`}
                        >
                            {elem.name}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};
export default RadioGroup;
