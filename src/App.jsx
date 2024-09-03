import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import ToDoList from './ToDoList';


function App() {
const [user,setUser] = useState(null);
const [isLoggingIn,setIsLoggingIn] = useState(true);

useEffect(() => {
  const storedUser = localStorage.getItem('user');
    if(storedUser){
      setUser(JSON.parse(storedUser));
    }
},[]);

const handleLogin = (username,password) =>{
  //implement login logic here
  //for now, just set the user 
  setUser({username,password});
  localStorage.setItem('user', JSON.stringify({username, password}));
};
    
    
const handleSignUp = (username, password) => {
  //implement signup logic here 
  //for now just set the user
  setUser({username,password});
  localStorage.setItem('user', JSON.stringify({username,password}));
};

// if(!user){
//   return isLoggingIn ? (
//     <Login 
//     onLogin={handleLogin}
//     onSwitch={() => setIsLoggingIn(false)} />
//   ) : (
//     <signUp onSignUP={handleSignUp}
//     onSwitch={() => setIsLoggingIn(true)} />
//   );
// }

return(
  <div>
    {user ? (
      <ToDoList user={user} />
    ) :isLoggingIn ? (
      <Login 
      onLogin={handleLogin}
      onSwitch={()=> setIsLoggingIn(false)} />
    ) : (
      <SignUp
      onSignUP={handleSignUp}
      onSwitch={() => setIsLoggingIn(true)}
      />
    )
  };
  </div>
)

}

export default App;