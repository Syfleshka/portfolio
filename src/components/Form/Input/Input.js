import {Component} from "react";
import * as PropTypes from "prop-types";

export class Input extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.updateData(this.props.id, event.target.value)
        this.setState({value: event.target.value});
    }

    render() {
        return <div className={`form-element form__element ${this.props.className}`}>
            <label htmlFor={this.props.name} className={`form-element__label`}>{this.props.label}</label>
            <input placeholder={this.props.placeholder}
                   id={this.props.id}
                   name={this.props.name}
                   className={`form-element__input`}
                   value={this.props.value}
                   onChange={this.handleChange}
                   {...this.props.extraProps}/>
            <label htmlFor={this.props.name} className={`form-element__error`}>{this.props.error}&nbsp;</label>
        </div>;
    }
}

Input.defaultProps = new function() {
    this.label = 'Label'
    this.className = ''
    this.id = 'input'
    this.name = this.id
    this.placeholder = 'Type here'
    this.error = 'Fill this field'
    this.extraProps = {}
}();

Input.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    extraProps: PropTypes.object
};
