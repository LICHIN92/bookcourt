import React, { useState } from 'react'
import '../pagestyle/login.css'
import Loginbox from '../Components/Loginbox'
import Signup from '../Components/Signup'
function Login() {
  const [boxtype, setboxtype] = useState('login')
  return (
    <div className="container">
      <h1 className='logo'>BookmyCourt</h1>
      <div className="box">
        {boxtype === 'login' ? <Loginbox setboxtype={setboxtype} /> : <Signup setboxtype={setboxtype} />}

      </div>

    </div>
  )
}

export default Login