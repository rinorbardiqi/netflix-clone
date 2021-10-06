import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route,Redirect } from "react-router-dom";
import { login, logout, selectUser } from "./app/Slice/userSlice";
import { auth } from "./firebase/firebase";
import HomeScreen from "./pages/HomeScreen/index";
import ProfileScreen from "./pages/ProfileScreen";
import LoginScreen from "./pages/LoginScreen";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Switch>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="*">
            <Redirect to="/profile" />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
