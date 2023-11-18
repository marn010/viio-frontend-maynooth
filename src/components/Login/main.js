import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Form, Input, Label, Button } from 'reactstrap'
import { API_URL } from "../Auth/constants";

import './main.css'



export default function Login(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

/*if(auth.isAuthenticated){
  return <Navigate to="/main" />
}*/


  async function handleSubmit(e){
    e.preventDefault();
    try {
      await fetch(`${API_URL}/login`,{
        method:"POST",
        mode: "cors",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
      .then((res) => {
        if(res.ok){
          console.log("Login success")
        }else{
          console.log("Something went wrong")
        }
        return res.json();
    })
    .then((data) => {
      if(data.accessToken){
        alert("Login success")
        localStorage.setItem("user",JSON.stringify(data))
        navigate('/main')
      }else{
        alert("Usuario/Contraseña incorrectos")
      }
    });

    } catch (error) {
      console.log("error: " + error)
    }
    
  }
  
  return(
    <div className="login">
      <h1>MAYNOOTH</h1>
      <Form onSubmit={handleSubmit} className="form">
        <Label htmlFor="email">
          Email
        </Label>
        <Input className="userInput"
        type="email" 
        name="email" 
        id="email"
        value={email} 
        placeholder="your@email.com"
        required
        onChange={e => setEmail(e.target.value)}/>

        <Label htmlFor="password">
          Password
        </Label><br/>
        <Input className="userInput"
        type="password" 
        name="password" 
        id="password"
        value={password} 
        placeholder="Password" 
        required
        onChange={e => setPassword(e.target.value)}  /><br/>

        <div className="userCredentials">
          <Input type="checkbox" id="rememberme" name="rememberme" val="rememberme" />
          <Label htmlFor="rememberme" >
            Remember me  
          </Label>
          <a href="/forgot">
            Forgot password?
          </a>
        </div>
        <Button type="submit" className="submitBTN">
          Log in
          </Button>
        <div>
          <h2>Or</h2>
        </div>
          <Button type="button" className="social">
            Continue with Google
          </Button>
          <Button type="button" className="social">
            Continue with Facebook
          </Button>

        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </Form>
    </div>
  )
}
/*
async function loginUser(credentials) {
  return fetch(`${API_URL}/login`, { 
    method: 'POST',
    mode: "cors",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(
      data => data.json(),
    console.log("Login Success"))
  }
*/
 