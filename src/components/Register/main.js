import { useState } from "react";
import axios from "axios";

import { API_URL } from "../Auth/constants";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useNavigate } from 'react-router-dom'

import './main.css'
export default function Register(){
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    try {
      await
      axios({
        method: 'POST',
        url:`${API_URL}/signup`,
        headers:{
        "Content-Type":"application/json"
        },
        data:{
          name,
          email,
          password,
        }
      })
      /* fetch(`${API_URL}/signup`,{
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
      }) */
      .then((res) => {
        if(res.statusText==="OK"){
          console.log("User created successfully")
        }else{
          console.log("Something went wrong")
        }
        console.log(res);
        return res;
      })
      .then((data) => {
        console.log(data)
        if(!data.error){
          alert("User created successfully")
          navigate('/login')
        }else{
          alert("An error occurs: \n"+data.error[0].path[0] +" "+ data.error[0].message )
        }
        //window.location.reload()
      });
    } catch (error) {
      console.log(error)
    }
  }

  /*if (auth.isAuthenticated){
    return <Navigate to="main" />
  }*/
  return(
    <div className="signupBox">
      <Form onSubmit={handleSubmit}>
        <h1>Sign-up</h1>
        <FormGroup>
          <Label >Name</Label>
          <Input type="text" id="name" name="name" placeholder="Name" value={name} required onChange={e => setName(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label >Email</Label>
          <Input type="email" id="email" name="email" placeholder="E-mail" value={email} required onChange={e => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" id="password" name="password" value={password} required onChange={e => setPassword(e.target.value)} />
        </FormGroup>

        <Button type="submit" className="submitBTN" >
          SignUp
        </Button>
      </Form>
    </div>
  )
}