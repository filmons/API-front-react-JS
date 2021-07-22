// import React from 'react'
import React from "react";
import "../assets/component/nav.css";
import { useState } from "react";
import { Link , NavLink} from "react-router-dom";

function Nav() {
	const [showLinks, setShowLinks] = useState(false);

	const handelShowLinks = () => {
		setShowLinks(!showLinks); // to check the class nav-bar
	};
	console.log(showLinks);
	return (
		<nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
			<div className="navbar_logo"><NavLink to="/" className="navbar_link" >
			<h1>Paroisse Catholique Emanuel de Montreuil</h1>
					</NavLink> </div>
			<ul className="navbar_links">
				

				<div className="dropdown">
					<button className="dropbtn">
						<li className="navbar_item" >
							<NavLink to="#" className="navbar_link">
								Abut As
							</NavLink>
						</li>
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="dropdown-content">
						<Link to="/Histoire">Histoire et Architecture</Link>
						<Link to="/Equipe">Equipes </Link>
						<Link to="/Cours">Cours</Link>
						<Link to="/Contact">Contact</Link>
					</div>
				</div>

				<div className="dropdown">
					<button className="dropbtn">
						<li className="navbar_item">
							<NavLink to="#" className="navbar_link">
								Enfance et jeunesse
							</NavLink>
						</li>
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="dropdown-content">
						<Link to="/Cristianisme">Cristianisme</Link>
						<Link to="/Eveil">Eveil à la foi </Link>
						<Link to="/Aumonerie">Aumônerie</Link>
						<Link to="/Scoutisme">Scoutisme</Link>
					</div>
				</div>
				
                    
					<div className="dropdown">
						<button className="dropbtn">
							<li className="navbar_item" >
								<NavLink to="#" className="navbar_link">
									Sacrements et célébrations
								</NavLink>
							</li>
							<i className="fa fa-caret-down"></i>
						</button>
						<div className="dropdown-content">
							<Link to="/Bateme">Baptême</Link>
							<Link to="/Mariage">Mariage</Link>
							<Link to="/Comunition">Communion</Link>
							<Link to="/Confirmation">Confirmation</Link>
							<Link to="/Reconsltation">Réconciliation</Link>
							<Link to="/Obseques">Obsèques</Link>
							<Link to="/Oncation">Onction des Malades</Link>
							<Link to="/Ordination">Ordination</Link>
						</div>
					</div>
					<li className="navbar_item" >
					<NavLink to="/Signup" className="navbar_link">
						Signup
					</NavLink>
                    </li>
				
				<li className="navbar_item" >
					<NavLink to="/Login" className="navbar_link">
						Login
					</NavLink>
				</li>
			</ul>
			<button className="navbar_burger" onClick={handelShowLinks}>
				<span className="burger-bar"></span>
			</button>
		</nav>
	);
}

export default Nav;
