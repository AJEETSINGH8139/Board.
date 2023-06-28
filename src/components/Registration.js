import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
  return (
    <div className="Authpage">
      <div className="board">
        <h1 className="board-head">Board.</h1>
      </div>
      <div className="auth">
        <div className="signin">
          <h1 className="sign-head">Sign In</h1>
          <p className="sign-para">Sign in to your account</p>
          <div className="google-auth">Google Auth</div>
          <div className="register-form">
            <form className="signin-form">
              <label className="lable-email" for="email">
                Email address
              </label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />

              <label className="lable" for="password">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="......"
              />

              <label className="lable" for="password">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="......"
              />

              <input className="form-btn lable" type="submit" value="Sign In" />
            </form>
          </div>

          <div>
            <span className="span-btn">
              Don't have an account? <Link to="/SignIn">Sign In</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
