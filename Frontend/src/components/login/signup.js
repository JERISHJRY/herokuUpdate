import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {useDispatch} from 'react-redux';
import {loginHandler} from "services/loginApi"
import *as rejex from "components/commons/commonRegex";

const Signup = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [passwordCheck, setPasswordStatus] = useState();
  const [isRePasswordShown, setVisibility] = useState(false);
  const [isPasswordShown, setPassVisibility] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = data => {
      if(data.password === data.rePassword){
        delete data["rePassword"];
        dispatch(loginHandler("post","/user/signup",data));
        props.history.push("/Login_Status")   
      }
      //checking password and re-entered password are same
      else{
        setPasswordStatus(
            <span>Both password did not match</span>
          )
      }
    };
  
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)} >
        <h3>New User Signup!</h3>
        <input
          name="firstName"
          placeholder="First Name"
          required
          ref={register(rejex.firstNameRejexPattern)}
        />
        {errors.firstName && <span>Name length should between 3 to 20 characters</span>}

        <input
          name="lastName"
          placeholder="Last Name"
          ref={register({
            required: true,
          })}
        />
        {errors.lastName && <span>This field required</span>}

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
          ref={register(rejex.emailPatternRejexPattern)}
        />
        {errors.email && <span>Email badly formated</span>}

        <div className="signUpPass left">
          <input
            name="password"
            placeholder="Password"
            type={isPasswordShown ? "text" : "password"}
            required
            ref={register(rejex.passwordRejexPattern)}
          /><i
            className="fa pass fa-eye password-icon"
            onClick={() => setPassVisibility(!(isPasswordShown))}
          />
        </div>
        {errors.password && <span>atleast 8 characters needed</span>}
        <div className="clear"></div>
        <div className="signUpRePass left">
          <input
            type={isRePasswordShown ? "text" : "password"}
            name="rePassword"
            placeholder="Re-Enter Password"
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]/i,
              }
            })}
          /><i
            className="fa fa-eye password-icon"
            onClick={() => setVisibility(!(isRePasswordShown))}
          />
        </div>
        {errors.rePassword && <span>This field is required</span>}
        {passwordCheck}<br />
        <div className="clear"></div>
        <button type="submit" >Signup</button>
      </form>
    </React.Fragment>
  );
}

export default Signup;