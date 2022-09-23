// start of components/UploadFileComponent.jsx
import PropTypes from "prop-types";
import BaseInputField from "./base/BaseInputField";

const UploadFileComponent = ({name, value, label, placeholder, handleChange, required}) => {
    return (
        <div className="form-group">
            {label && <label htmlFor={name}>{label} {!required && <span className="optional">(Optional)</span>}</label>}
            <input
                type="file"
                value={value}
                name={name}
                required={required}
                className="form-control"
                placeholder={placeholder}
                onChange={handleChange}
            />
            <span className="description">Upload an image that doesn’t exceed 2 MB.</span>

        </div>
    );
};


BaseInputField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
}

BaseInputField.defaultProps = {
  name: '',
  value: '',
  label: '',
  placeholder: '',
  required: false,
}


export default UploadFileComponent;
// end of components/UploadFileComponent.jsx
