import React, { useRef } from "react";
import { auth } from "../../firebase/firebase";
import CancelIcon from "@material-ui/icons/Cancel";
import "./style.css";
function SignUpScreen(props) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((error) => alert(error.message));
  };
  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((error) => alert(error.message));
  };
  return (
    <div className="signupScreen">
      <form>
        <div className="close__button" onClick={props.onCancel}>
          <CancelIcon />
        </div>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray"> New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
