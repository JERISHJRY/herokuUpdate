import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as rejex from 'components/commons/commonRegex';
import csc from 'country-state-city';
import {toast} from 'react-toastify';


const BillingAddressForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const [checked, setChecked] = useState(true);
    const [countriesList, setCountrylist] = useState([]);
    const [stateList, setStatelist] = useState([]);
    const [stateDisable, setDisable] = useState(true);

    useEffect(() => {
        let countries = csc.getAllCountries();
        setCountrylist(countries);
    }, []);

    const handleCountry = (event) => {
        let country = event.target.value;
        let temp = countriesList.filter((count) => count.name === country);
        const id = temp[0].id;
        let statesList = csc.getStatesOfCountry(id);
        setStatelist(statesList);
        setDisable(false);
    };

    const onSubmit = (data) => {
        console.log(data, 'onsubmit');
        if (checked) {
            // const billingAddress = data;
            toast( "continue_shopping",{ position: "top-right",autoClose: 3000,hideProgressBar: true})
        }
    };
    return (
        <> <form onSubmit={handleSubmit(onSubmit)}>
                <div className='col-sm-5 clearfix'>
                    <div className='bill-to'>
                        <p>Bill To</p>
                        <div className='form-one'>
                            <form>
                                <input
                                    type='text'
                                    name='cm'
                                    placeholder='Company Name'
                                    ref={register({
                                        required: true,
                                        minLength: 3,
                                        maxLength: 30,
                                    })}
                                />
                                <input
                                    name='email'
                                    type='text'
                                    placeholder='Email*'
                                    ref={register(
                                        rejex.emailPatternRejexPattern
                                    )}
                                />
                                {errors.email && (
                                    <span>Email badly formated</span>
                                )}
                                <input
                                    type='text'
                                    name='title'
                                    placeholder='Title'
                                />
                                <input
                                    type='text'
                                    name='fn'
                                    placeholder='First Name *'
                                    ref={register({
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />
                                <input
                                    type='text'
                                    name='mn'
                                    placeholder='Middle Name'
                                    ref={register({
                                        minLength: 3,
                                        maxLength: 20,
                                    })}
                                />
                                <input
                                    type='text'
                                    name='ln'
                                    placeholder='Last Name *'
                                    ref={register({
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />
                                <input
                                    type='text'
                                    name='addr1'
                                    placeholder='Address 1 *'
                                    ref={register({
                                        required: true,
                                        minLength: 3,
                                        maxLength: 30,
                                    })}
                                />
                                <input
                                    type='text'
                                    placeholder='Address 2'
                                    name='addr2'
                                    ref={register({
                                        minLength: 3,
                                        maxLength: 30,
                                    })}
                                />
                            </form>
                        </div>
                        <div className='form-two'>
                            <form>
                                <input
                                    name='zip'
                                    type='text'
                                    placeholder='Zip / Postal Code *'
                                    ref={register({ required: true })}
                                />
                                <select onChange={handleCountry}>
                                    <option>-- Country --</option>
                                    {countriesList.map((count, i) => (
                                    <option key={i}>{count.name}</option>
                                    ))}
                                </select>
                                <select disabled={stateDisable}>
                                    <option>-- State / Province / Region -- </option>
                                    {stateList.map((state, i) => (
                                    <option key={i}>{state.name}</option>
                                    ))}
                                </select>
                                <input
                                    type='password'
                                    placeholder='Confirm password'
                                    name='cpass'
                                />
                                <input
                                    name='phone'
                                    type='text'
                                    placeholder='Phone *'
                                    ref={register({
                                        required: true,
                                        minLength: 3,
                                        maxLength: 20,
                                        pattern: /^[0]?[789]\d{9}$/,
                                    })}
                                />
                                {errors.email && (<span>Enter valid Phone number</span> )}

                                <input
                                    name='mobile'
                                    type='text'
                                    placeholder='Mobile Phone'
                                    ref={register({
                                        minLength: 3,
                                        maxLength: 20,
                                        pattern: /^[0]?[789]\d{9}$/,
                                    })}
                                />
                                <input
                                    name='fax'
                                    type='text'
                                    placeholder='Fax'
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='order-message'>
                        <p>Shipping Order</p>
                        <form>
                            <textarea
                            name='message'
                            placeholder='Notes about your order, Special Notes for Delivery'
                            rows='16'></textarea>
                            <label>
                            <input
                                type='checkbox'
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                            />
                            Shipping to bill address
                            </label>
                        </form>
                    </div>
                </div>
                <input
                    type='submit'
                    value='Continue'
                    className='billingContinue'
                    style={{ border: 'none', padding: '10px' }}
                />
            </form></>);
};
export default BillingAddressForm;
