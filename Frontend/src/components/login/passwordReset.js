import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { passwordResetHandler } from "services/passwordResetApi";
import * as rejex from "components/commons/commonRegex";
import { makeResponseEmpty } from "redux/actions/loginActions";

const ResetPassword = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [passwordCheck, setPasswordStatus] = useState();
  const [isRePasswordShown, setVisibility] = useState(false);
  const [isPasswordShown, setPassVisibility] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data.newPassword === data.ReEnteredPassword) {
      dispatch(makeResponseEmpty);
      let token = data.token;
      delete data["token"];
      dispatch(
        passwordResetHandler(
          `${process.env.REACT_APP_BASE_URL}/user/reset-password`,
          data,
          token
        )
      );
    }
    //checking password and re-entered password are same
    else {
      setPasswordStatus(<span>Both password did not match</span>);
    }
  };

  return (
    <div className="ResetPasswordWrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Password reset </h3>
        <input
          name="token"
          placeholder="Enter token given to your email"
          ref={register({
            required: true,
          })}
        />
        {errors.token && <span>This field is required</span>}
        <div className="signUpPass left">
          <input
            name="newPassword"
            placeholder="enter new Password"
            type={isPasswordShown ? "text" : "password"}
            required
            ref={register(rejex.passwordRejexPattern)}
          />
          <i
            className="fa pass fa-eye password-icon"
            onClick={() => setPassVisibility(!isPasswordShown)}
          />
        </div>
        {errors.newPassword && <span>atleast 8 characters needed</span>}
        <div className="clear"></div>
        <div className="signUpRePass left">
          <input
            type={isRePasswordShown ? "text" : "password"}
            name="ReEnteredPassword"
            placeholder="Re-Enter Password"
            ref={register(rejex.passwordRejexPattern)}
          />
          <i
            className="fa fa-eye password-icon"
            onClick={() => setVisibility(!isRePasswordShown)}
          />
        </div>
        {errors.ReEnteredPassword && <span>atleast 8 characters needed</span>}
        {passwordCheck}
        <br />
        <div className="clear"></div>
        <button type="submit">Reset password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
