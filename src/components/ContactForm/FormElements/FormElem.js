const FormElem = ({ children, className, name, error }) => {
    return (
        <div className={`form-element form__element${className ? ` ${className}` : ``}`}>
            <label htmlFor={children.id} className={`form-element__label`}>
                {name}
            </label>
            {children}
            <label htmlFor={children.id} className={`form-element__error`}>
                {error && error['message']}&nbsp;
            </label>
        </div>
    );
};
export default FormElem;
