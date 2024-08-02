import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {login}  from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'
import {signUp} from '../../firebase'
const Login = () => {
  const[signState,setSignState]=useState("Sign In")
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);
const user_auth=async (event)=>{
  event.preventDefault();
  setLoading(true)
  if(signState==="Sign In"){
    await login(email,password);
  }
  else{
    await signUp(name,email,password);
  }
  setLoading(false)
}
  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner}  alt="" />
    </div>:
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?<input type="text" 
          value={name} onChange={(event)=>{setName(event.target.value)}} placeholder='Your name' />:<></>}
          
          <input type="email" value={email}
           onChange={(event)=>{setEmail(event.target.value)}} placeholder='Email' />
          <input type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} placeholder='password' />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">

          
          <div className="remember">
          <label htmlFor="">Remember Me</label>
            <input type="checkbox"/>
            </div>
           
          <p>Need Help?</p>
          </div>
        </form>
        <div className='form-switch'>
          {signState==="Sign Up"?<p>Already have an account?<span onClick={()=>{setSignState("Sign In")}}>Sign In</span></p>: <p>New User?<span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>}
      
          
      </div>
    </div>
    </div>
  )
}

export default Login;