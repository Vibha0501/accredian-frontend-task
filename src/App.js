import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/L0ginForm";
import SignUpForm from "./components/SignupForm";

function Home() {
  return (
    <div>
      {/* Your home page content */}
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}

function App() {
  const [showSignUp, setShowSignUp] = useState(true);

  const toggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/"
            element={showSignUp ? <SignUpForm /> : <LoginForm />}
          />
        </Routes>
      </Router>
      <p style={{ textAlign: "center" }}>
        {showSignUp ? "Already have an account? " : "Not registered yet? "}
        <button onClick={toggleForm}>{showSignUp ? "Login" : "Sign Up"}</button>
      </p>
    </div>
  );
}

export default App;
