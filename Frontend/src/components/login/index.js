import React, { useEffect } from "react";
import Signin from "./signin";
import Signup from "./signup";
import { useDispatch } from "react-redux";
import { makeResponseEmpty } from "redux/actions/loginActions";
import {Title} from 'components/commons/titleChange';

const LoginWrapper = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(makeResponseEmpty());
  }, []);

  return (
    <div className="loginWrapper">
      <Title title={'Login'}/>
      <div className="signin left">
        <Signin {...props} />
      </div>
      <div className="OR left">OR</div>
      <div className="signup left">
        <Signup {...props} />
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default LoginWrapper;
