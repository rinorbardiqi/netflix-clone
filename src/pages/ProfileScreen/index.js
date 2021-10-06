import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/Slice/userSlice";
import Nav from "../../components/NavBar";
import { auth } from "../../firebase/firebase";
import "./style.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const signOutHandler = () => {
    auth.signOut();
  };
  
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <button
                className="profileScreen__signOut"
                onClick={signOutHandler}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
