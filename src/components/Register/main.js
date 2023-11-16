import { useState } from "react";
import { useAuth } from "../Auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { API_URL } from "../Auth/constants";

import './main.css'
export default function Register(){
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const auth = useAuth();

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/signup`,{
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
  
      if(response.ok){
        console.log("User created successfully");
        alert("User created succesfully");
      } else {
        console.log("Something went wrong");
      
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (auth.isAuthenticated){
    return <Navigate to="main" />
  }
  return(
    <div className="signupBox">
      <form onSubmit={handleSubmit}>
        <h1>Sign-up</h1>
        <label >Name</label>
        <input type="text" id="name" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>

        <label >Email</label>
        <input type="email" id="email" name="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />

        <label>Password</label>
        <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />

        <button type="submit" >
          SignUp
        </button>
      </form>
    </div>
  )
}