// start of components/base/BaseButton.jsx
import PropTypes from "prop-types";

import BaseInputField from "./BaseInputField";

const BaseButton = ({name, label, onClick, classes}) => {
    return (
        <div className="button">
            <input
                type="submit"
                value={label}
                className={classes}
                name={name}
                onClick={onClick}
            />
        </div>
    );
};

BaseInputField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    classes: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

BaseInputField.defaultProps = {
    name: '',
    label: '',
    classes: '',
}

export default BaseButton;

// end of components/base/BaseButton.jsx
