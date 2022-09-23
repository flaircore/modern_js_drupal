// start of components/base/BaseInput.jsx

import PropTypes from 'prop-types'

const BaseInputField = ({type, name, value, label, placeholder, onChange, required}) => {

    const updateChanges = (event) => {
        const {value, name: key } = event.target
        // @TODO validate and show/set errors related to this scope(input).
        // Send input name (object key in parent) and it's value.
        onChange({key, value})

    }
    return (
        <div className="form-group">
            {label && <label htmlFor={name}>{label} {!required && <span className="optional">(Optional)</span>}</label>}
            <input
                type={type}
                value={value}
                name={name}
                required={required}
                className="form-control"
                placeholder={placeholder}
                onChange={updateChanges}
            />
        </div>
    );
};

BaseInputField.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

BaseInputField.defaultProps = {
    type: 'text',
    value: '',
    name: '',
    label: '',
    required: false,
    placeholder: '',
}

export default BaseInputField;

// End of components/base/BaseInput.jsx
