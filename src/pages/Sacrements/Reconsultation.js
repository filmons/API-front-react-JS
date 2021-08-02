import React, { Component } from "react";
import "../../assets/Sacrement/Reconciliation.css";
import photo from "../../source/equipes/eglise.png";

class Reconsultation extends React.Component {
	render() {
		return (
			<div className="continer_reconsulation">
				<div className="item_reconsultation">
					<span>Réconciliation</span>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque luctus, lectus vitae suscipit tempus, ante eros
						tincidunt elit, et viverra mauris massa vitae turpis. Ut nibh
						libero, euismod et diam eget, fermentum rhoncus diam. Mauris congue
						at ipsum sed scelerisque. Sed tincidunt tincidunt lorem vel iaculis.
						Maecenas id luctus nibh, sit amet mattis odio. Curabitur ac ipsum
						posuere, pulvinar mi eleifend, elementum dui. Phasellus a efficitur
						dolor. Nullam vehicula nunc diam, vitae tempor felis feugiat nec.
						Sed nec ante ultricies lectus fringilla tempor. Suspendisse gravida
						lacus a laoreet laoreet. Donec vitae augue cursus, lobortis lorem
						nec, dignissim nisl. Vivamus eget nisi sit amet tellus faucibus
						viverra vitae sagittis lectus. Donec egestas at erat id molestie.
						Nam eget malesuada sem, eu ultrices ante. Mauris tincidunt volutpat
						elit a aliquet. Sed varius sollicitudin nulla, in cursus lacus
						rhoncus sed. Quisque dapibus odio vitae tempor blandit. Class aptent
						taciti sociosqu ad litora torquent per conubia nostra, per inceptos
						himenaeos. Mauris sed est est. Ut tristique quam sapien, in
						vestibulum felis cursus nec. Phasellus ut aliquam urna. Fusce a
						molestie erat. Nam arcu est, gravida quis ultrices eu, viverra ut
						ex. Pellentesque habitant morbi tristique senectus et netus et
						malesuada fames ac turpis egestas. Nam accumsan sodales velit id
						auctor. Donec vel rutrum odio. Donec faucibus mattis dolor vitae
						aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et
						ultrices posuere cubilia curae; Aliquam erat volutpat. Duis
						dignissim tempor mauris id volutpat. Duis at elit gravida,
						scelerisque metus sed, gravida sem. Ut velit erat, ultrices sed
						tincidunt ac, tempus quis purus. Curabitur bibendum metus eu velit
						semper semper. Suspendisse tincidunt tortor ac eros volutpat, eget
						maximus sapien vulputate. Pellentesque habitant morbi tristique
						senectus et netus et malesuada fames ac turpis egestas. Suspendisse
						id ex et tortor vestibulum vulputate. Pellentesque elementum
						sagittis posuere.
					</p>
					<div className="conf_tow_info">
						<h5>Pour plus d'informations</h5>
						<section className="des_photo_conf">
							<img className="ferst" src={photo} alt="photo des éqipe" />
							<div>
								<h4>Elodie Soulié</h4>
								<p>Responsable Baptême et Mariage</p>
								<a>baptemes.mariages@.com</a>
							</div>
						</section>
					</div>
				</div>
			</div>
		);
	}
}

export default Reconsultation;
