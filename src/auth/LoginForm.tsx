import React, { useState } from 'react';
import classes from "./LoginForm.module.css"

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleLogin = ()=>{
    console.log('abara')
}

  return (
    <div>
            <div style={{width: "400px"}}>
            <h1 style={{textAlign: "start"}}>Authorization</h1>
            <div className={classes.inputContainer}>
                <input
                className={classes.input}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                <input
                className={classes.input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                <a className={classes.forgotPass}>Forgot Your password?</a>
            </div>
            <button onClick={handleLogin} className={classes.loginBtn}>Login</button>
            <div className={classes.otherLogins}>
                <button className={classes.button}>Google</button>
                <button className={classes.button}>Facebook</button>
                <button className={classes.button}>Apple ID</button>
            </div>
            </div>
    </div>
  );
};

export default LoginForm;