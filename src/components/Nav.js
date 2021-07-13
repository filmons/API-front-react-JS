// import React from 'react'
import React from "react";
import "../assets/component/nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
	const [showLinks, setShowLinks] = useState(false);

	const handelShowLinks = () => {
		setShowLinks(!showLinks); // to check the class nav-bar
	};
	console.log(showLinks);
	return (
		<nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
			<div className="navbar_logo"><Link to="/" className="navbar_link" >
			Paroisse Catholique Emanuel de Montreuil
					</Link> </div>
			<ul className="navbar_links">
				

				<div className="dropdown">
					<button className="dropbtn">
						<li className="navbar_item" >
							<Link to="#" className="navbar_link">
								Abut As
							</Link>
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
							<Link to="#" className="navbar_link">
								Enfance et jeunesse
							</Link>
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
								<Link to="#" className="navbar_link">
									Sacrements et célébrations
								</Link>
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
					<Link to="/Signup" className="navbar_link">
						Signup
					</Link>
                    </li>
				
				<li className="navbar_item" >
					<Link to="/Login" className="navbar_link">
						Login
					</Link>
				</li>
			</ul>
			<button className="navbar_burger" onClick={handelShowLinks}>
				<span className="burger-bar"></span>
			</button>
		</nav>
	);
}

export default Nav;
