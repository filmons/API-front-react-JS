import React from 'react';
import  '../src/assets/App.css'
import Home from './pages/Home'
import Nav from './components/Nav';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Contact from './pages/About/Contact';
import Footer from './components/Foter';
import Histoire from './pages/About/Histoire';
import Equipe from './pages/About/Equipe';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
          <div>
            <Nav/>
            <Router>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Histoire' component={Histoire} />
            <Route exact path='/Equipe' component={Equipe} />
            <Route exact path='/Signup' component={Signup}/>
            <Route exact path='/Login' component={Login}/>
            <Route exact path='/contact' component={Contact}/>
            </Switch>
            </Router>
            <Footer/>
          </div>
         
   );
 }

export default App