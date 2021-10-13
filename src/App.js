import React from "react";
import "./assets/App.css";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Foter";
import Signup from "./pages/services/Signup";
import Login from "./pages/services/Login";
import Contact from "./pages/About/Contact";
import Histoire from "./pages/About/Histoire";
import Equipe from "./pages/About/Equipe";
import Cours from "./pages/About/Cours";
import Aumonerie from "./pages/Enfance et jeunesse/Aumonerie";
import Eveil from "./pages/Enfance et jeunesse/Eveil";
import Cristianisme from "./pages/Enfance et jeunesse/Cristianisme ";
import Scoutisme from "./pages/Enfance et jeunesse/Scoutisme";
import Bateme from "./pages/Sacrements/Bateme";
import Comunition from "./pages/Sacrements/Comunition";
import Confirmation from "./pages/Sacrements/Confirmation";
import Mariage from "./pages/Sacrements/Mariage";
import Obseques from "./pages/Sacrements/Obseques";
import Oncation from "./pages/Sacrements/Oncation";
import Ordination from "./pages/Sacrements/Ordination";
import Reconsltation from "./pages/Sacrements/Reconsultation";
import btnLogOut from "./pages/About/btnLogOut";

function PrivateRoute(props) {
	if (localStorage.getItem("token")) {
		return <Route exact path={props.path} component={props.component} />;
	}
	return <Route render={() => <Redirect to="/login" />} />;
}

function App() {
	return (
		<div>
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/Histoire" component={Histoire} />
					<PrivateRoute path="/Equipe" component={Equipe} />
					<PrivateRoute path="/Cours" component={Cours} />
					<PrivateRoute  path="/contact" component={Contact} />
					<PrivateRoute exact path="/Aumonerie" component={Aumonerie} />
					<PrivateRoute exact path="/Eveil" component={Eveil} />
					<Route exact path="/Scoutisme" component={Scoutisme} />
					<Route exact path="/Cristianisme" component={Cristianisme} />
					<Route exact path="/Bateme" component={Bateme} />
					<Route exact path="/Comunition" component={Comunition} />
					<Route exact path="/Confirmation" component={Confirmation} />
					<Route exact path="/Mariage" component={Mariage} />
					<Route exact path="/Obseques" component={Obseques} />
					<Route exact path="/Oncation" component={Oncation} />
					<Route exact path="/Ordination" component={Ordination} />
					<Route exact path="/Reconsltation" component={Reconsltation} />
					<Route exact path="/Signup" component={Signup} />
					<Route exact path="/Login" component={Login} />
					<Route exact path="/" component={btnLogOut} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
