import { useState } from "react";
import { useAuth } from "../Auth/AuthProvider";
import { Navigate } from "react-router-dom";

import './main.css'

async function loginUser(credentials) {
  return fetch('', { //https://www.mecallapi.com/api/login
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


export default function Login(){
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
const auth = useAuth();

if(auth.isAuthenticated){
  return <Navigate to="/main" />
}


  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password
    });
    if ('accessToken' in response){
      alert('login')
      .then((value) =>{
        localStorage.setItem('accessToken',response['accessToken']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.href = "/";
      });
    } else{
     //
      alert('Failed') 
    }
  }
  
  return(
    <div className="login">
      <h1>MAYNOOTH</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">
          Email
        </label>
        <input className="userInput"
        type="email" 
        name="email" 
        id="email" 
        placeholder="your@email.com"
        onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="password">
          Password
        </label><br/>
        <input className="userInput"
        type="password" name="password" id="password" placeholder="Password" 
        onChange={e => setPassword(e.target.value)} /><br/>

        <div className="userCredentials">
          <input type="checkbox" id="rememberme" name="rememberme" val="rememberme" />
          <label htmlFor="rememberme" >
            Remember me  
          </label>
          <a href="/forgot">
            Forgot password?
          </a>
        </div>
        <button type="submit" className="submitBTN">Log in</button>
        <div>
          <h2>Or</h2>
        </div>
          <button type="submit" className="social">
            Continue with Google
          </button>
          <button type="submit" className="social">
            Continue with Facebook
          </button>

        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </form>
    </div>
  )
}
