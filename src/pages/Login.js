import React from 'react';
import axios from 'axios'
import '../assets/login.css'

class Login extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: '',
          errorLogin: false
        };
      }
    
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };
    
      handleClick = () => {
        const options = {
          email: this.state.email,
          password: this.state.password,
        };
       
        
        axios
          .post('http://localhost:8000/V1/sigin', options, {
            headers: { 'content-type': 'application/json' },
          })
          .then((data) => {
            console.log(data);
            if(data.status === 200){
                 this.props.history.push('/');
    
            }else{
                this.setState({
                    errorLogin: true
                })
            }
            //this.props.history.push('/');
          })
          .catch((error) => console.log(error));
          console.log(options);

      };


    render(){
        return(
        <section>
        <div className="container">
            <div className="form_log">
        <h1 className>Login</h1>
        </div>
        <div className="lebls">
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required onChange={this.handleChange}/>
      
          
        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required onChange={this.handleChange}/>

        <button onClick={this.handleClick} type="submit" className="signupbtn">Login</button>

        </div>
        </div>
        </section>
        )
    }
}
export default Login