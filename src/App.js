import React,{useState} from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignupForm";

function App() {
  const [showSignUp, setShowSignUp] = useState(true);

  const toggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="App">
      {showSignUp ? (
        <div>
          <h1>Sign Up</h1>
          <SignUpForm />
          <p>
            Already registered? <button onClick={toggleForm}>Login</button>
          </p>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <LoginForm />
          <p>
            Not registered yet? <button onClick={toggleForm}>Sign Up</button>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;