import React from "react";

function SignIn() {
  return (
    <div className="signin">
      <h1 className="sign-head">Sign In</h1>
      <p className="sign-para">Sign in to your account</p>
      <div className="google-auth">Google Auth</div>
      <div className="sign-form">
      <form className="signin-form">
        <label className="lable-email" for="email">Email address</label>
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="example@gmail.com"
        />

        <label className="lable" for="password">Password</label>
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="......"
        />

        <a href="#">Forgot password?</a>

        <input className="form-btn lable" type="submit" value="Sign In" />
      </form>
      </div>
      
      <div>
        <span className="span-btn">Don't have an account? <a href="#">Register here</a></span>
        
      </div>
    </div>
  );
}

export default SignIn;
