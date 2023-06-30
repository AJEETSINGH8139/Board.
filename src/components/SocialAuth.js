import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import google from "../assets/google-icon 1.png"
import apple from "../assets/apple 1.png"

function SocialAuth() {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/home");
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorCode+" "+errorMessage+" "+email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <div className="social-auth">
      <button className="google-auth" onClick={handleClick}><img className="social-img" src={google} /> Sign in with Google</button>
      <button className="google-auth" onClick={handleClick}><img className="social-img" src={apple} /> Sign in with Apple</button>
    </div>
  );
}

export default SocialAuth;
