import React, { useState } from "react";
import '../App.css'
import Button from '@mui/material/Button';


export default function SignUp({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // POST request to signup route
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((r) => r.json())
      .then(onLogin);
  }

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button className='login-Btn' type="submit">Submit</Button>
    </form>
  );
}

