import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import InputControl from "./InputControl/InputControl";
import { auth } from "../firebase";
import SocialAuth from "./SocialAuth";
import {sendPasswordResetEmail } from "firebase/auth";

function SignIn() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    sendPasswordResetEmail(auth, values.email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="Authpage">
      <div className="board">
        <h1 className="board-head">Board.</h1>
      </div>
      <div className="auth">
        <div className="signin">
          <h1 className="sign-head">Sign In</h1>
          <p className="sign-para">Sign in to your account</p>
          <div className="social-auth">
            <SocialAuth />
          </div>
          <div className="register-form">
            <InputControl
              label="Email address"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
              placeholder="johndoe@gmail.com"
            />
            <InputControl
              label="Password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
              placeholder="......."
            />
            <div>
              <Link className="forgot" to="#">
                Forgot password?
              </Link>
            </div>

            <b>{errorMsg}</b>
            <button
              className="form-btn"
              disabled={submitButtonDisabled}
              onClick={handleSubmission}
            >
              Login
            </button>
          </div>

          <div>
            <span className="span-btn">
              Don't have an account?{" "}
              <Link className="a" to="/registration">
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
