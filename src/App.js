import React from 'react';
import  '../src/assets/App.css'
import Home from './pages/Home'
import Nav from './components/Nav';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
          <div>
            <Nav/>
            <Router>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Signup' component={Signup}/>
            <Route exact path='/Login' component={Login}/>
            <Route exact path='/contact' component={Contact}/>
            </Switch>
            </Router>
          </div>
         
   );
 }

export default App