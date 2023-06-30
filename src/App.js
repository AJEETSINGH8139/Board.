import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Registration from "./components/Registration";
import SignIn from "./components/SignIn";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

import { auth } from "./firebase";
function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </UserAuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
