import React from 'react'
import  '../assets/Nav.css'
//import {withRouter} from 'react-router-dom'


class Nav extends React.Component{

    render(){
        return (
            <div>
            <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbuton"> 
            <i class=" fas fa-bars"></i>

        </label>
         <label class="logo">Meanu Disaine</label>
        <ul>
            <li><a  class="acive" href="/">Home</a></li>
            <li><a href="#">About as</a></li>
            <li><a href="#">services</a></li>
            <li><a href="/Contact">contact</a></li>
            <li><a href="#">facebook</a></li>
            <li><a href="#">instagram</a></li>
            <li><a href="#">Another</a></li>
        </ul>
    </nav>
            </div>
    
    
           
        )
    }
  }
  
  export default Nav



