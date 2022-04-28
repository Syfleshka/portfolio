const FormElem = ({ children, className, name, error }) => {
    return (
        <div className={`form-element form__element${className ? ` ${className}` : ``} input-field`}>
            <label htmlFor={children.id} className={`input-field__label`}>
                {name}
            </label>
            {children}
            <label htmlFor={children.id} className={`input-field__error`}>
                {error && error['message']}&nbsp;
            </label>
        </div>
    );
};
export default FormElem;
