import React from "react";
import { useState } from 'react';

import { useNavigate } from "react-router-dom";
import { apiService } from "../services/api-service";
import { TOKEN_KEY } from "../services/api-service";


const Login = () => {
   const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleLogin = (e) => {
    e.preventDefault();
     apiService('/auth/login', 'POST', {email, password})
        .then(token => {
            localStorage.setItem(TOKEN_KEY, token);
             navigate("/", { replace: true });
            })
        
        // .then(token => console.log(token))
        .catch(() => console.log("Wrong!!"))
    //  console.log({email, password});
    
}

    return (
        <>
<h1 className="text-center display-1">Login Page</h1>

        <main className="container">
            <section className="mt-4 row justify-content-center">
                <div className="col-12 col-md-4">
                    <form className="p-4 border rounded shadow form-group">
                        <label htmlFor="email">Email</label>
                        
                        <input
                        type = "email"
                        autoComplete="email" 
                        className="form-control mb-2" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} />
                        
                        <label htmlFor="password">Password</label>
                        
                        <input
                        type = "password"
                        autoComplete="current-password" 
                        className="form-control mb-2" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} />
                    <button onClick={handleLogin} className="btn btn-success">Login</button>
                    </form>
                </div>
            </section>
        </main>
    </>
    )
}

export default Login;