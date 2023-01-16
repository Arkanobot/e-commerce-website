import React, { useState } from "react";
import "../style/Login.css";
// import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Logo from "../img/shreyas_logo_nav.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();

    //firebaase login functionality goes here
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    //firebase register functionality goes here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //if it logs, it means created successfully
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={Logo} alt="Shreyas' Logo" />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail / Mobile No.</h5>
          <TextField
            className="login__textField"
            required
            id="outlined-required"
            label="Required"
            defaultValue="E-Mail / Mobile No."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <TextField
            className="login__textField"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            SIGN IN
          </button>
        </form>
        <p>
          By signing-in you agree to Shreyas' Conditions of Use & Sale. Please
          see our Privacy Notices, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        {/* <button className="login__registerButton">Create Your Account</button> */}
        <Button
          className="login__registerButton"
          variant="outlined"
          color="success"
          onClick={register}
        >
          Create Your Account
        </Button>
      </div>
    </div>
  );
}

export default Login;
