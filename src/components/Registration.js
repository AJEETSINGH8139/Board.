import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "./InputControl/InputControl";
import { auth } from "../firebase";
import SocialAuth from "./SocialAuth";

function Registration() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
    pass: '',
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
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
          <h1 className="sign-head">Sign Up</h1>
          <p className="sign-para">Sign up to your account</p>
          <div className="social-auth">
            <SocialAuth />
          </div>
          <div className="register-form">
            <InputControl
              label="Name"
              placeholder="John Doe"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
            />
            <InputControl
              label="Email address"
              placeholder="johndoe@gamil.com"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
            />
            <InputControl
              label="Password"
              placeholder="......."
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
            />

            <b>{errorMsg}</b>
            <button className="form-btn" onClick={handleSubmission} disabled={submitButtonDisabled}>
              Sign Up
            </button>
          </div>

          <div>
            <span className="span-btn">
              Don't have an account? <Link className="a" to="/signIn">Sign In</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
