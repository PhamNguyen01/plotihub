import { useState } from "react";
import LoginForm from "./Login";
import SignUp from "./Signup";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <wrapper>
      {/* <Logo>Reciplease</Logo> */}
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <Button  onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUp onLogin={onLogin} />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button  onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </wrapper>
  );
}


export default Login;
