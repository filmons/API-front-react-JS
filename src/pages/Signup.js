import React from 'react';
import '../assets/signup.css'
import axios from 'axios'

class signup extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      city: 'city vide',
      password: ''
    }

}
handleChange = (event) => {
  this.setState({ 
      [event.target.name]: event.target.value 
  })

  
}
handleClick = () => {
  const options = {
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    email: this.state.email,
    password: this.state.password,
    city: this.state.city
  }
  console.log(options);
  axios.post('http://localhost:8000/V1/signup', options, {
    headers: {'content-type': 'application/json'}
})
.then(data => {
    console.log(data)
    this.props.history.push('/login')
})
.catch(error => console.log(error))
console.log(options);
//this.props.history.push('/login')
}

    render(){
        return(
        
        <div className="container" >
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr/>
        <div className="lebls">
        
          <label htmlFor="first_name"><b>first Name</b></label>
          <input type="text" id="first_name" placeholder="Enter first Name" name="first_name" required onChange={this.handleChange}/>
        
        
          <label htmlFor="email"><b>last Name</b></label>
          <input type="text" placeholder="Enter last Name" name="last_name" required onChange={this.handleChange}/>

          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required onChange={this.handleChange}/>
      
          

          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required  onChange={this.handleChange}/>
      
          <label htmlFor="city"><b>city</b></label>
          <input type="password" placeholder="Enter Password" name="city" required  onChange={this.handleChange}/>
          
          <p>By creating an account you agree to our <a href="#" style={{color: 'dodgerblue '}}>Terms & Privacy</a>.</p>
        
          <div className="clearfix">
              <p>
            <button type="button" className="cancelbtn">Cancel</button>
            <button onClick={this.handleClick} type="submit" className="signupbtn">Sign Up</button>
            </p>
                </div>
            </div>
          </div>

          
         
        )
    }
}

export default signup