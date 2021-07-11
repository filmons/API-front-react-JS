// import React from 'react'
import React from "react";
import "../assets/component/nav.css";
import { useState } from "react";

function Nav() {
	const [showLinks, setShowLinks] = useState(false);

	const handelShowLinks = () => {
		setShowLinks(!showLinks); // to check the class nav-bar
	};
	console.log(showLinks);
	return (
		<nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
			<div className="navbar_logo">Paroisse Catholique Emanuel de Montreuil</div>
			<ul className="navbar_links">
				<li className="navbar_item">
					<a href="/" className="navbar_link" >
						home
					</a>
				</li>

				<div className="dropdown">
					<button className="dropbtn">
						<li className="navbar_item" >
							<a href="#" className="navbar_link">
								Abut As
							</a>
						</li>
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="dropdown-content">
						<a href="/Histoire">Histoire et Architecture</a>
						<a href="/Equipe">Equipes </a>
						<a href="/Aumonerie">cours</a>
						<a href="/Scoutisme">contact</a>
					</div>
				</div>
				{/* <li className="navbar_item" slideInDown-3>
					<a href="/" className="navbar_link">
						bala
					</a>
				</li> */}

				<div className="dropdown">
					<button className="dropbtn">
						<li className="navbar_item">
							<a href="#" className="navbar_link">
								Enfance et jeunesse
							</a>
						</li>
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="dropdown-content">
						<a href="/Catechisme">Catéchisme</a>
						<a href="/Eveil">Eveil à la foi </a>
						<a href="/Aumonerie">Aumônerie</a>
						<a href="/Scoutisme">Scoutisme</a>
					</div>
				</div>
				
                    
					<div className="dropdown">
						<button className="dropbtn">
							<li className="navbar_item" >
								<a href="#" className="navbar_link">
									Sacrements et célébrations
								</a>
							</li>
							<i className="fa fa-caret-down"></i>
						</button>
						<div className="dropdown-content">
							<a href="/Bapteme">Baptême</a>
							<a href="/Mariage">Mariage</a>
							<a href="/Communion">Communion</a>
							<a href="/Confirmation">Confirmation</a>
							<a href="/Reconciliation">Réconciliation</a>
							<a href="/Obseques">Obsèques</a>
							<a href="/Onction">Onction des Malades</a>
							<a href="/Ordination">Ordination</a>
						</div>
					</div>
					<li className="navbar_item" >
					<a href="/Signup" className="navbar_link">
						Signup
					</a>
                    </li>
				
				<li className="navbar_item" >
					<a href="/Login" className="navbar_link">
						Login
					</a>
				</li>
			</ul>
			<button className="navbar_burger" onClick={handelShowLinks}>
				<span className="burger-bar"></span>
			</button>
		</nav>
	);
}

export default Nav;
