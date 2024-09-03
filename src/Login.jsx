import PropTypes from 'prop-types';
import { useState } from "react";
function Login({onLogin,onSwitch}){
    const [username, setUsername] = useState("");
    const [password,SetPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password)
    };

    return(
        <div className="login-signup">
           <h1>Login</h1> 
           <form onSubmit={handleSubmit} className='login-signup-form'>
                <input 
                type="text"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                placeholder='Username'
                className='login-signup-input'
                />
                <input 
                type="password"
                value={password}
                onChange={(e)=> SetPassword(e.target.value)}
                placeholder='Password'
                className='login-signup-input'
                />
                <button type="submit"
                className='login-signup-button'>
                    Login
                </button>
           </form>
           <p>
            Don&apos;t have an account?{''} <button onClick={onSwitch}
            className='login-signup-switch-button'>
                Sign up
            </button>
           </p>
        </div>
    );
    
}

Login.PropTypes ={
    onLogin:PropTypes.func.isRequired,
    onSwitch:PropTypes.func.isRequired
}
export default Login;