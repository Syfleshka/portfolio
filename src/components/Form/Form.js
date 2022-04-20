import {Component} from "react";
import {Input} from "./Input/Input";
import {InputPhone} from "./InputPhone/InputPhone";
import {Textarea} from "./Textarea/Textarea";
import Cookies from "universal-cookie";
import validator from 'validator';

const cookies = new Cookies();

export class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formFields: {
                email: {
                    value: cookies.get('email') ? cookies.get('email') : '',
                    valid: true,
                    error: 'Type correct Email'
                },
                phone: {
                    value: cookies.get('phone') ? cookies.get('phone') : '',
                    valid: true,
                    error: 'Or type correct Phone'
                },
                name: {
                    value: cookies.get('name') ? cookies.get('name') : '',
                    valid: true,
                    error: 'Type your name'
                },
                message: {
                    value: cookies.get('message') ? cookies.get('message') : '',
                    valid: true,
                    error: 'Message must be at least 20 symbols'
                }
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateData = (id, value) => {
        this.setState({[id]: value})
        cookies.set(id, value, {path: '/contact'});
    }

    handleSubmit(event) {
        event.preventDefault();

        const validCheck = {
            email: validator.isEmail(this.state.email),
            phone: validator.isMobilePhone(this.state.phone),
            name: this.state.name.length > 1,
            message: this.state.message.length > 10,
        }

        if (
            (validCheck.email || validCheck.phone) &&
            validCheck.name &&
            validCheck.message
        ) {
            console.log('message sent')
        }
        /*

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: '844004220',
                text: `Name: ${this.state.name} \n\nEmail: ${this.state.email ? this.state.email : ''} \n\nPhone: ${this.state.phone ? this.state.phone : ''} \n\nMessage:\n ${this.state.message}`
            })
        };
        fetch(`https://api.telegram.org/bot5120027835:AAHdL7JF2LGcd9aGgW5Cdd0msWe_Ixk_GiE/sendMessage`, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));

        cookies.remove('email', {path: '/contact'})
        cookies.remove('phone', {path: '/contact'})
        cookies.remove('name', {path: '/contact'})
        cookies.remove('message', {path: '/contact'})
        this.setState({email: ''})
        this.setState({phone: ''})
        this.setState({name: ''})
        this.setState({message: ''})

        */
    }

    render() {
        return <form className={`form main__form`} onSubmit={this.handleSubmit}>
            <Input label={`Email`}
                   id={`email`}
                   extraProps={{required: true}}
                   updateData={this.updateData}
                   value={this.state.formFields.email.value}
                   error={this.state.formFields.email.error}
                   valid={this.state.formFields.email.valid}
            />
            <InputPhone label={`Or phone`}
                        id={`phone`}
                        name={`phone`}
                        extraProps={{required: true}}
                        updateData={this.updateData}
                        value={this.state.formFields.phone.value}
                        error={this.state.formFields.phone.error}
                        valid={this.state.formFields.phone.valid}
            />
            <Input label={`Name`}
                   id={`name`}
                   className={`form__element_new-row`}
                   extraProps={{required: true}}
                   updateData={this.updateData}
                   value={this.state.formFields.name.value}
                   error={this.state.formFields.name.error}
                   valid={this.state.formFields.name.valid}
            />
            <Textarea label={`Your message`}
                      name={`message`}
                      id={`message`}
                      className={`form__element_new-row form__element_2col`}
                      extraProps={{required: true}}
                      updateData={this.updateData}
                      value={this.state.formFields.message.value}
                      error={this.state.formFields.message.error}
                      valid={this.state.formFields.message.valid}
            />
            <div className={`form-element form__element form__element_new-row`}>
                <button type={`submit`}>Send</button>
            </div>
            <div className={`form-element form__element form__element_new-row`}>
                <p>
                    Email: {this.state.email}<br/>
                    Phone: {this.state.phone}<br/>
                    Surname: {this.state.name}<br/>
                    Message: {this.state.message}
                </p>
            </div>
        </form>;
    }
}