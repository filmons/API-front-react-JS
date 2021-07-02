import React from 'react'
import  '../assets/Nav.css'
//import {withRouter} from 'react-router-dom'


class Nav extends React.Component{

    render(){
        return (
            <div>
            <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbuton"> 
            <i className=" fas fa-bars"></i>

        </label>
         <label className="logo">Meanu Disaine</label>
        <ul>
            <li><a  className="acive" href="/">Home</a></li>
            <li><a href="#">About as</a></li>
            <li><a href="#">services</a></li>
            <li><a href="/Contact">contact</a></li>
            <li><a href="#">facebook</a></li>
            <li><a href="/signup">signup</a></li>
            <li><a href="/login">login</a></li>
        </ul>
    </nav>
    </div>
    
    
           
        )
    }
  }
  
  export default Nav



