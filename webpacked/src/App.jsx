// Start of App.jsx
import PropTypes from 'prop-types'

import UploadFileComponent from "./components/UploadFileComponent";
import BaseInputField from "./components/base/BaseInputField";
import {useState} from "react";
import BaseButton from "./components/base/BaseButton";

const App = ({appTitle}) => {
    const [values, updateValues] = useState({
        productName: '',
        productImage: '',
        planName: '',
        price: ''
    });

    const handleChange = (input) => {
        const {key, value} = input
        updateValues({...values, [key]: value})

    }

    const handleClick = e => {
        e.preventDefault()
    }

    return (
        <>
            <main className="container">
                <section className="section item-create">
                    <div className="page-title">Form Title: {appTitle} </div>
                    <form className='product-form'>
                        <div className="general-info">
                            <div className="section-title">General info</div>
                            <div className="user-inputs">
                                <BaseInputField
                                    value={values.productName}
                                    name='productName'
                                    required={true}
                                    placeholder='E.g. Spark plugs/ cables.'
                                    label='Product name'
                                    onChange={handleChange}
                                />
                                <UploadFileComponent
                                    value={values.productImage}
                                    name='productImage'
                                    type="file"
                                    placeholder='Upload the product image that doesn’t exceed 2 MB.'
                                    label='Product image'
                                    handleChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="pricing">
                            <div className="section-title">
                                Pricing Plans
                            </div>
                            <span className="title-description">
                                Create pricing plans for this product/service.
                            Note that every product/service can have multiple plans.
                        </span>

                            <div className="user-inputs">
                                <BaseInputField
                                    value={values.planName}
                                    name='planName'
                                    required={true}
                                    placeholder='E.g. Monthly, Lifetime, etc.'
                                    label='Plan name'
                                    onChange={handleChange}
                                />

                                <div className="group">
                                    <div>Billing Type</div>
                                    <div className="billing-type">
                                        <BaseButton
                                            name='Recurring'
                                            label='Recurring'
                                            onClick={handleClick}
                                        />
                                        <BaseButton
                                            name='One time'
                                            label='One time'
                                            classes="selected"
                                            onClick={handleClick}
                                        />
                                    </div>

                                </div>

                                <BaseInputField
                                    value={values.price}
                                    name='price'
                                    type='text'
                                    required={true}
                                    label='Price'
                                    placeholder="0.00"
                                    onChange={handleChange}
                                />

                            </div>
                            <div className="another-group">
                                <BaseButton
                                    name='another plan'
                                    label='+ Add Another Plan'
                                    onClick={handleClick}
                                />
                            </div>

                        </div>

                        <div className="form-actions">
                            <BaseButton
                                name='Cancel'
                                label='Cancel'
                                onClick={handleClick}
                            />
                            <BaseButton
                                name='Create'
                                label='Create'
                                classes="disabled"
                                onClick={handleClick}
                            />
                        </div>
                    </form>
                </section>
            </main>

        </>
    );
};

App.prototype = {
  appTitle: PropTypes.string.isRequired
}

export default App;


// End of App.jsx
