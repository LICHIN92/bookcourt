import React, { useState } from 'react';
import './componentstyle/login.css';
import axios from 'axios';

function Loginbox({ setboxtype }) {
  const [logindata, setlogindata] = useState({
    email: "",
    password: ""
  });


  const handle = (event) => {
    setlogindata({ ...logindata, [event.target.name]: event.target.value });
  
  };
const dologin=()=>{
  if(logindata.email && logindata.password){
    axios.post('http://localhost:5000/auth/dologin',logindata).then(response=>console.log(response)).catch(err=>{
      console.log(err);
    })

  }else{
    alert("empty credentials")
  }
}
  return (
    <div className='loginbox'>
      <h1>Login <span className='thin'>Now!</span></h1>
      <div className='inputfield'>
        <label htmlFor="email">Email: </label>
        <input type="text" name='email' value={logindata.email} onChange={handle} /> <br /> <br />
        <label htmlFor="password">Password: </label>
        <input type="password" name='password' value={logindata.password} onChange={handle} /> <br />
      </div>
      <br />
      <button onClick={dologin}>LOG IN</button>
      <p>if not registered? <i href='' onClick={() => setboxtype('signin')}> SIGN IN</i></p>
    </div>
  );
}

export default Loginbox;
