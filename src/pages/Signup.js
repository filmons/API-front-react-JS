import React from 'react';
import '../assets/signup.css'
import axios from 'axios'

class signup extends React.Component{

    render(){
        return(
        
        <div className="container" >
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr/>
        <div className="lebls">
        
          <label for="email"><b>first Name</b></label>
          <input type="text" placeholder="Enter first Name" name="first Name" required />
        
        
          <label for="email"><b>last Name</b></label>
          <input type="text" placeholder="Enter last Name" name="last Name" required />

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />
      
          

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
      
         
          
          <p>By creating an account you agree to our <a href="#" style={{color: 'dodgerblue '}}>Terms & Privacy</a>.</p>
        
          <div className="clearfix">
              <p>
            <button type="button" className="cancelbtn">Cancel</button>
            <button type="submit" className="signupbtn">Sign Up</button>
            </p>
                </div>
            </div>
          </div>

          
         
        )
    }
}

export default signup