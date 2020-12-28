import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import csc from 'country-state-city';
import Button from 'components/commons/button';
const EstimateCostContainer = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const [countriesList, setCountrylist] = useState([]);
    const [stateList, setStatelist] = useState([]);
    const [stateDisable, setDisable] = useState(true);

    useEffect(() => {
        let countries = csc.getAllCountries();
        setCountrylist(countries);}, []);

    const handleCountry = (event) => {
        let country = event.target.value;
        let temp = countriesList.filter((count) => count.name === country);
        const id = temp[0].id;
        let statesList = csc.getStatesOfCountry(id);
        setStatelist(statesList);
        setDisable(false);
    };
    const onSubmit = (data) => {
        const estimatecost = data;
    };
    return (
        <form className='col-sm-6' onSubmit={handleSubmit(onSubmit)}>
            <div className='chose_area'>
                <ul className='user_option'>
                    <li>
                    <input
                        type='checkbox'
                        name='checkcoupon'
                        ref={register({ required: true })}
                    />
                    <label>Use Coupon Code</label>
                    </li>
                    <li>
                    <input
                        type='checkbox'
                        name='checkgiftvol'
                        ref={register({ required: false })}
                    />
                    <label>Use Gift Voucher</label>
                    </li>
                    <li>
                    <input
                        type='checkbox'
                        name='checkshiptax'
                        ref={register({ required: false })}
                    />
                    <label>Estimate Shipping Taxes</label>
                    </li>
                </ul>
                <ul className='user_info'>
                    <li className='single_field'>
                        <label>Country:</label>
                        <select
                        onChange={handleCountry}
                        name='country'
                        ref={register({ required: true })}>
                        <option>-- Country --</option>
                        {countriesList.map((count, i) => (
                        <option key={i}>{count.name}</option>
                        ))}
                        </select>
                    </li>
                    <li className='single_field'>
                        <label>Region / State:</label>
                        <select
                            disabled={stateDisable}
                            name='city'
                            ref={register({ required: true })}>
                            <option>-- State / Province / Region --</option>
                            {stateList.map((state, i) => (
                            <option key={i}>{state.name}</option>
                            ))}
                        </select>
                    </li>
                    <li className='single_field zip-field' name='zipcode'>
                        <label>Zip Code:</label>
                        <input
                            type='text'
                            ref={register({ required: true })}
                            name='zip'
                        />
                    </li>
                </ul>

                <Button  className='btn btn-default update' buttonLabel='Get Quotes'/>
                <input
                    type='submit'
                    value='Continue'
                    className='btn btn-default check_out'
                />
            </div>
        </form>
    );
};
export default EstimateCostContainer;