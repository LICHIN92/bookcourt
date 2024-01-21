import React, { useState } from 'react'
import './componentstyle/login.css'
import axios from 'axios'
function Signup({ setboxtype }) {
    const [signupdata, setsigndata] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmpassword: ""
    })
    const handler = (e) => {
        document.getElementById("mobileval").innerHTML = '';

        setsigndata({ ...signupdata, [e.target.name]: e.target.value })
    }
    function namevalid() {
        let a = signupdata.name
        let check = /^[a-z]+$/i
        if (check.test(a)) {
            return true
        }
    }
    function emailvalid() {
        let email = signupdata.email;
        let check = /^([a-z0-9_.]+)@([a-z]{5,10})\.([a-z]{3,6})$/i;
        return check.test(email) ? true : false;
    }

    function mobilevalid() {
        let mobile = signupdata.mobile;
        let check = /^([0-9]{10,10})$/i
        if (check.test(mobile)) {
            return true
        } else {
            console.log('mob error');
            document.getElementById("mobileval").innerHTML = 'enter 10 digit mobile number';
            document.getElementById("mobileval").style.color = 'red';
            return false;
        }
    }
    function passwordvalid() {
        let password = signupdata.password
        console.log(password.length);
        let confirmpassword = signupdata.confirmpassword
        if (password.length >= 6 && password === confirmpassword) {
            return true
        } else {
            password.length < 6 ? alert('Password should be at least 6 characters') : alert('confirmpassword is not match')
        }
    }
    const dosignup = () => {
        if (namevalid() && emailvalid() && mobilevalid() && passwordvalid()) {
            console.log(signupdata);
            axios.post('http://localhost:5000/auth/dosignup', signupdata)
                .then(response => {
                    console.log(response.data)
                    if (response.data) {
                        setboxtype('login')
                    }else{
                        alert('email is exist')
                    }
                })
                .catch(error => {
                    console.log('eror');
                    console.log(error);
                })

        }
    }
    return (
        <div className="signupbox">
            <h1>Sign Up</h1>
            <div className='signup'>
                <label htmlFor="">Name: </label>
                <input type="text" name='name' value={signupdata.name} onChange={handler} /> <br /> <br />

                <label htmlFor="">Email: </label>
                <input type="email" name='email' value={signupdata.email} onChange={handler} /> <br /><br />

                <label htmlFor="">Mobile: </label>
                <input type="number" name='mobile' value={signupdata.mobile} onChange={handler} /> <br />
                <small id='mobileval'></small>
                <br />

                <label htmlFor="">Password: </label>
                <input type="Password" name='password' value={signupdata.password} onChange={handler} placeholder='enter atleast 6 length' /> <br /><br />

                <label htmlFor="">Confirm Password: </label>
                <input type="Password" name='confirmpassword' value={signupdata.confirmpassword} onChange={handler} placeholder='re-enter the password' /> <br /> <br />
            </div>
            <button onClick={dosignup}>SIGN UP</button>
            <p>if registered <i onClick={() => setboxtype('login')}>LOG IN</i></p>

        </div>
    )
}

export default Signup