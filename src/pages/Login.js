import React from 'react';
import axios from 'axios'
import '../assets/login.css'

class Login extends React.Component{

    render(){
        return(
        <section>
        <div className="container">
        <h1>Login</h1>
        <div className="lebls">
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required />
      
          
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />

        <button type="submit" className="signupbtn">Login</button>

        </div>
        </div>
        </section>
        )
    }
}
export default Login