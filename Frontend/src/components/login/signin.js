import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "reactstrap";
import { useDispatch } from "react-redux";
import { loginHandler } from "services/loginApi";
import * as rejex from "components/commons/commonRegex";
import ForgotPassword from "./forgotPassword";

const Signin = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [forgotpass, setforgotpass] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const [isPasswordShown, setPassVisibility] = useState(false);
  const [backToLogin, setBackToLogin] = useState(false);

  const onSubmit = (data) => {
    dispatch(loginHandler("post", `${process.env.REACT_APP_BASE_URL}/user/signin`, data));
    props.history.push("/Login_Status");
  };

  const handleForgotPassword = () => {
    setShow(false);
    setforgotpass(true);
    setBackToLogin(true);
  };
  const handleSignIn = () => {
    setShow(true);
    setforgotpass(false);
    setBackToLogin(false);
  };

  return (
    <React.Fragment>
      {show && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3>Login to your account</h3>
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            ref={register(rejex.emailPatternRejexPattern)}
          />
          {errors.email && errors.email.message}
          <div className="signUpPass left">
            <input
              name="password"
              type={isPasswordShown ? "text" : "password"}
              placeholder="Password"
              required="* PASSWORD REQUIRED"
              ref={register(rejex.passwordRejexPattern)}
            />
            <i
              className="fa pass fa-eye password-icon"
              onClick={() => setPassVisibility(!isPasswordShown)}
            />
          </div>
          {errors.password && <span>* required atleast 8 characters</span>}
          <br />
          <br />
          <br />
          <button type="submit">Login</button>
          <span className="forgerPassword right" onClick={handleForgotPassword}>
            forgot password
          </span>
        </Form>
      )}
      {forgotpass && <ForgotPassword {...props} />}
      {backToLogin && (
        <span className="forgerPassword right" onClick={handleSignIn}>
          {"<- Back to Signin"}
        </span>
      )}
    </React.Fragment>
  );
};

export default Signin;
