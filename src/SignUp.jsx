import PropTypes from 'prop-types';
import { useState } from 'react';
function SignUp ({onSignUp,onSwitch}) {
    const [username, setUsername] = useState("")
    const [password, SetPassword] = useState("")

    const handleSubmit =(e) =>{
        e.preventDefault();
        onSignUp(username,password);
    };

    return(
        <div className="login-signup">
            <h1>Sign UP</h1>
            <form onSubmit={handleSubmit}
            className='login-signup-form'>
            <input
             type="text"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             placeholder='username'
             className='login-signup-input' />

             <input
              type="password"
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              placeholder='password'
              className='login-signup-input'
              />
              <button type="submit"
              className='login-signup-button'>
                Sign Up
              </button>
            </form>
            <p>Already have an account? {''} <button onClick={onSwitch} 
            className='login-signup-switch-button'>
                Login
                </button>
               
                </p>
        </div>
    );
}

SignUp.PropTypes = {
    onSignUp:PropTypes.func.isRequired,
    onSwitch:PropTypes.func.isRequired,
}

// SignUp.defaultProps = {
//     onSignUp :() => {},
//     onSwitch :() => {},
    
// };

export default SignUp;