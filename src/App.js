import React from 'react';
import  './assets/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Nav from './components/Nav';
import Footer from './components/Foter';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Contact from './pages/About/Contact';
import Histoire from './pages/About/Histoire';
import Equipe from './pages/About/Equipe';
import Cours from './pages/About/Cours';
import Aumonerie from './pages/Enfance et jeunesse/Aumonerie';
import Eveil from './pages/Enfance et jeunesse/Eveil';
import Cristianisme from './pages/Enfance et jeunesse/Cristianisme ';
import Scoutisme from './pages/Enfance et jeunesse/Scoutisme';
import Bateme from './pages/Sacrements/Bateme';
import Comunition from './pages/Sacrements/Comunition';
import Confirmation from './pages/Sacrements/Confirmation';
import Mariage from  './pages/Sacrements/Mariage';
import Obseques from './pages/Sacrements/Obseques';
import Oncation from './pages/Sacrements/Oncation';
import Ordination from './pages/Sacrements/Ordination';
import Reconsltation from './pages/Sacrements/Reconsultation';


function App() {
  return (
          <div>
            <Router>
            <Nav/>
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Histoire' component={Histoire}/>
            <Route exact path='/Equipe' component={Equipe}/>
            <Route exact path='/Cours' component={Cours}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/Aumonerie' component={Aumonerie}/>
            <Route exact path='/Eveil' component={Eveil}/>
            <Route exact path='/Scoutisme' component={Scoutisme}/>
            <Route exact path='/Cristianisme' component={Cristianisme}/>
            <Route exact path='/Bateme' component={Bateme} />
            <Route exact path='/Comunition' component={Comunition} />
            <Route exact path='/Confirmation' component={Confirmation}/>
            <Route exact path='/Mariage' component={Mariage} />
            <Route exact path='/Obseques' component={Obseques} />
            <Route exact path='/Oncation' component={Oncation} />
            <Route exact path='/Ordination' component={Ordination} />
            <Route exact path='/Reconsltation' component={Reconsltation} />
            <Route exact path='/Signup' component={Signup}/>
            <Route exact path='/Login' component={Login}/>
            </Switch>
            <Footer/>
            </Router>
          </div>
         
   );
 }

export default App