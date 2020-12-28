import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ShopperInfo = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const [passwordCheck, setPasswordStatus] = useState();

    const onSubmit = (data) => {
        if (data.pass === data.cpass) {
         const loginCreditionals = data;
        } else {
        setPasswordStatus(<span>Both password did not match</span>);}
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type='text'
                name='user'
                placeholder='User Name'
                ref={register({ required: true, minLength: 7, maxLength: 30 })}
            />
            {errors.email && <span>Enter atleast 7 characters</span>}

            <input
                type='password'
                name='pass'
                placeholder='Password'
                ref={register({ required: true, minLength: 8, maxLength: 30 })}
            />
            {errors.pass && <span>Enter atleast 8 characters</span>}
            <input
                type='password'
                name='cpass'
                placeholder='Confirm password'
                ref={register({ required: true, minLength: 8, maxLength: 30 })}
            />
            <br />
            {passwordCheck}
            <div>
                <input
                    className='btn btn-primary'
                    href=''
                    value='Get Quotes'
                    style={{ width: '40%' }}
                />
                <input
                    className='btn btn-primary'
                    type='submit'
                    value='Continue'
                    style={{ display: 'inline' }}
                />
            </div>
        </form>
    );
};
export default ShopperInfo;
