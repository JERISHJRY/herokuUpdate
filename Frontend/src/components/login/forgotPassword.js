import React from "react";
import {Form} from "reactstrap";
import *as rejex from "components/commons/commonRegex"
import {useForm} from "react-hook-form";
import {loginHandler} from "services/loginApi";
import {useDispatch} from "react-redux";
 
const ForgotPassword= (props) => {
    const dispatch=useDispatch();
    const { register ,handleSubmit,errors } =useForm();

    const onSubmit = data =>{
    dispatch(loginHandler("post","/user/forgot-password",data));
    props.history.push("/Login_Status")
    }

    return(<>
    <Form onSubmit={handleSubmit(onSubmit)} >
    <label>Email </label>
    <input
    type="text"
    placeholder="example@mail.in"
    name="email"
    ref={register(rejex.emailPatternRejexPattern)}
    />
    {errors.email && <span>Email badly formated</span>}<br/>
    <button type="submit">Submit</button>
    </Form>
    </>)
}

export default ForgotPassword;