// import React from 'react'
import React from "react";
import "../assets/Nav.css";
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
					<a href="/" className="navbar_link" slideInDown-1>
						home
					</a>
				</li>

				<div className="dropdown">
					<button className="dropbtn">
						<li className="navbar_item" slideInDown-2>
							<a href="/" className="navbar_link">
								Abut As
							</a>
						</li>
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="dropdown-content">
						<a href="/Histoire">Histoire et Architecture</a>
						<a href="/Equipe">Equipes </a>
						<a href="#">Aumônerie</a>
						<a href="#">Scoutisme</a>
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
							<a href="/" className="navbar_link">
								Enfance et jeunesse
							</a>
						</li>
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="dropdown-content">
						<a href="#">Catéchisme</a>
						<a href="#">Eveil à la foi </a>
						<a href="#">Aumônerie</a>
						<a href="#">Scoutisme</a>
					</div>
				</div>
				<li className="navbar_item" slideInDown-4>
					<a href="/Signup" className="navbar_link">
						Signup
					</a>
                    </li>
                    
					<div className="dropdown">
						<button className="dropbtn">
							<li className="navbar_item" slideInDown-3>
								<a href="/" className="navbar_link">
									Sacrements et célébrations
								</a>
							</li>
							<i className="fa fa-caret-down"></i>
						</button>
						<div className="dropdown-content">
							<a href="#">Baptême</a>
							<a href="#">Mariage</a>
							<a href="#">Communion</a>
							<a href="#">Confirmation</a>
							<a href="#">Réconciliation</a>
							<a href="#">Obsèques</a>
							<a href="#">Onction des Malades</a>
							<a href="#">Ordination</a>
						</div>
					</div>
				
				<li className="navbar_item" slideInDown-5>
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
