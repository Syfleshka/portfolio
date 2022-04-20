import {Component} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import * as PropTypes from "prop-types";

export class InputPhone extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event)
        this.props.updateData(this.props.name, event)
        //this.setState({value: event.target.value});
    }

    render() {
        return <div className={`form-element form__element ${this.props.className}`}>
            <label htmlFor={this.props.name} className={`form-element__label`}>{this.props.label}</label>
            <PhoneInput id={this.props.id}
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        className={`form-element__phone-input`}
                        value={this.props.value}
                        onChange={this.handleChange}/>
            <label htmlFor={this.props.name} className={`form-element__error`}>{this.props.error}&nbsp;</label>
        </div>;
    }
}

InputPhone.defaultProps = new function() {
    this.label = 'Label'
    this.className = ''
    this.id = 'input'
    this.name = this.id
    this.placeholder = 'Type here'
    this.error = 'Fill this field'
    this.extraProps = {}
}();

InputPhone.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    extraProps: PropTypes.object
};
