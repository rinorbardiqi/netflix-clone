import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router";
import "./styles.css";

function Nav() {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const profileHanlder = () => {
    history.push("/profile");
  };
  const backToHomeHandler = () => {
    history.push("/");
  };
  const transtitionNavBar = useCallback(() => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", transtitionNavBar);
    return () => window.removeEventListener("scroll", transtitionNavBar);
  }, [transtitionNavBar]);
  return (
    <div className={`nav ${show ? "nav__black" : ""}`}>
      <div className="nav__content">
        <img
          onClick={backToHomeHandler}
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <img
          onClick={profileHanlder}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
