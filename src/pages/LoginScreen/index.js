import React, { useState } from "react";
import "./style.css";
import SignUpScreen from "../SignUpScreen/index";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const signInHolder = () => {
    setSignIn(true);
  };
  const cancelForm =()=>{
    setSignIn(false)
  }

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix"
        />
        <button className="loginScreen__button" onClick={signInHolder}>
          {" "}
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignUpScreen onCancel={cancelForm}/>
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen_getStarted"
                  onClick={signInHolder}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
