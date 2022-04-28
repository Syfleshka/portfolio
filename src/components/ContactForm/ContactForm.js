import { Controller, useForm } from 'react-hook-form';
import 'react-phone-number-input/style.css';
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input';
import { useState } from 'react';
import RadioGroup from './FormElements/RadioGroup';
import FormElem from './FormElements/FormElem';
import './ContactForm.scss'

const TG_API = process.env.REACT_APP_TG_API_KEY;

const sendToTelegram = (data) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: '844004220',
            text: `${JSON.stringify(data)}`,
        }),
    };
    fetch(`https://api.telegram.org/bot${TG_API}/sendMessage`, requestOptions)
        .then((response) => response.json())
        .then((data) => this.setState({ postId: data.id }));
};

const ContactForm = () => {
    const [communicationChannel, setCommunicationChannel] = useState('telegram');

    const updateCommunicationChannel = (value) => {
        setCommunicationChannel(value);
    };

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = (data) => {
        sendToTelegram(data);
        reset();
    };

    const registerOptions = {
        name: {
            required: 'Name is required',
            minLength: {
                value: 2,
                message: 'Please type correct name',
            },
        },
        email: {
            required: 'Email is required',
            pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Please provide correct Email',
            },
        },
        phone: {
            required: 'Phone is required',
            validate: (value) => isPossiblePhoneNumber(value) || 'Type correct phone',
        },
        telegram: {
            required: 'Telegram is required',
        },
        message: {
            required: 'Please write your message',
        },
    };

    return (
        <form className={`form main__form`} onSubmit={handleSubmit(onSubmit)}>
            <RadioGroup
                inputList={[
                    { name: 'Telegram', value: 'telegram' },
                    { name: 'Phone', value: 'phone' },
                    { name: 'E-mail', value: 'email' },
                ]}
                defaultChecked={'telegram'}
                onChange={updateCommunicationChannel}
            />
            {communicationChannel === 'telegram' ? (
                <FormElem className={`form__element_new-row`} name={`Telegram:`} error={errors.telegram}>
                    <input
                        placeholder={`@yourname`}
                        type="text"
                        {...register('telegram', registerOptions.telegram)}
                        id="telegram"
                        className={`input-field__input`}
                    />
                </FormElem>
            ) : communicationChannel === 'phone' ? (
                <FormElem className={`form__element_new-row`} name={`Phone:`} error={errors.phone}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <PhoneInput
                                placeholder={`+70000000000`}
                                type="phone"
                                id="phone"
                                name="phone"
                                className={`input-field__input-phone`}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                        name="phone"
                        rules={registerOptions.phone}
                    />
                </FormElem>
            ) : communicationChannel === 'email' ? (
                <FormElem className={`form__element_new-row`} name={`E-mail:`} error={errors.email}>
                    <input
                        placeholder={`example@example.com`}
                        type="text"
                        {...register('email', registerOptions.email)}
                        id="email"
                        className={`input-field__input`}
                    />
                </FormElem>
            ) : null}

            <FormElem name={`Name:`} error={errors.name}>
                <input
                    placeholder={`Your name`}
                    type="text"
                    {...register('name', registerOptions.name)}
                    id="name"
                    className={`input-field__input`}
                />
            </FormElem>
            <FormElem className={`form__element_new-row form__element_2col`} name={`Message:`} error={errors.message}>
                <textarea
                    placeholder={`Your message`}
                    {...register('message', registerOptions.message)}
                    rows={8}
                    id="message"
                    className={`input-field__input`}
                />
            </FormElem>

            <div className={`form-element form__element form__element_new-row`}>
                <button type={`submit`} className={`input-button`}>Send</button>
            </div>
        </form>
    );
};
export default ContactForm;
