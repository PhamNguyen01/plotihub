import React, { useState } from "react";
import '../App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"


export default function LoginForm({ onLogin }) {
  const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user_id) => onLogin(user_id));
                // console.log("Logged in mate!")
                // alert("Succesfully Logged In")
                navigate("/dashboard")


            } else {
                r.json().then((err) => setErrors(err.errors));
                // console.log("Errors in mate!")
                alert("Invalid Username or password")

            }
        });        
    }


    return (

        <form onSubmit={handleSubmit} className='login-form'>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button className='login-btn' type="submit" >
                    {/* <Link to="/dashboard"> */}
                    {isLoading ? "Loading..." : "Login"}

                    {/* </Link> */}
                </Button>
                {/* {errors.map((err) => (
                    <Error key={err}>{err}</Error>
                ))} */}

            {/* <Button type="submit" className='login-btn' variant="outlined"><Link className='link'>Log In</Link></Button> */}
        </form>


    )
}