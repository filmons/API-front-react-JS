import React from 'react'
import axios from 'axios';
import Nav from '../components/Nav'


class Home extends React.Component{

    render(){
        return (
    <div className="App">
        <div className='siguputton'>
        <button><a href='/Login'>Login</a></button>
        <button><a href='/Signup'>Signup</a></button>
        </div>
        <header className="App-header">
         <h1> this is Home Pages</h1>
        </header>
    </div>
           
        )
    }
  }
  
  export default Home