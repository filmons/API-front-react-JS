import React, { Component } from "react";
import "../../assets/Sacrement/Ordination.css";
import photo from "../../source/equipes/eglise.png";

class Ordination extends React.Component {
	render() {
		return (
			<div className="continer_ordination">
				<div className="item_ordination">
					<span>Ordination</span>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
						erat risus, pellentesque eu arcu et, vehicula posuere tortor. Nunc
						efficitur, mi id molestie consequat, sapien dolor laoreet mi, nec
						rhoncus est dolor vestibulum mi. Sed non ante nulla. Duis lacinia
						dictum viverra. Pellentesque blandit blandit sem, nec tempus lectus
						ultrices nec. Cras ut efficitur justo. Quisque tempor in quam sed
						porttitor. Nulla maximus, tortor non faucibus tristique, quam elit
						semper ipsum, id vulputate lorem nisi eget est. Phasellus viverra
						nisi nibh, quis posuere turpis porta id. Nullam eget nisl posuere,
						bibendum leo fermentum, tincidunt tortor. Aliquam erat volutpat. Ut
						enim ante, fringilla non nisl eu, finibus pellentesque velit. In
						fringilla leo at dolor congue aliquet. Maecenas posuere bibendum
						quam vitae pellentesque. Mauris sit amet nisl non metus gravida
						sagittis. Fusce aliquet maximus est non placerat. Quisque ultrices
						augue in enim euismod, sed facilisis quam eleifend. Aliquam ut
						libero eros. Vivamus vitae consectetur sem. Orci varius natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						Mauris eu imperdiet dui, eget dictum est. Donec ut placerat tellus.
						Integer imperdiet, risus at luctus lobortis, purus tortor feugiat
						nibh, sed pharetra eros leo eu enim. Duis feugiat pulvinar arcu, nec
						elementum est efficitur vel. Nam ante dui, varius at sodales vel,
						aliquam nec enim. Curabitur eu mi in nibh cursus convallis ultrices
						vitae ipsum. Etiam scelerisque mollis ligula sed eleifend. Fusce
						porta turpis ac placerat tristique. Etiam eu odio at risus lobortis
						imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et
						ultrices posuere cubilia curae;
					</p>
					<br />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
						erat risus, pellentesque eu arcu et, vehicula posuere tortor. Nunc
						efficitur, mi id molestie consequat, sapien dolor laoreet mi, nec
						rhoncus est dolor vestibulum mi. Sed non ante nulla. Duis lacinia
						dictum viverra. Pellentesque blandit blandit sem, nec tempus lectus
						ultrices nec. Cras ut efficitur justo. Quisque tempor in quam sed
						porttitor. Nulla maximus, tortor non faucibus tristique, quam elit
						semper ipsum, id vulputate lorem nisi eget est. Phasellus viverra
						nisi nibh, quis posuere turpis porta id. Nullam eget nisl posuere,
						bibendum leo fermentum, tincidunt tortor. Aliquam erat volutpat. Ut
						enim ante, fringilla non nisl eu, finibus pellentesque velit. In
						fringilla leo at dolor congue aliquet. Maecenas posuere bibendum
						quam vitae pellentesque. Mauris sit amet nisl non metus gravida
						sagittis. Fusce aliquet maximus est non placerat. Quisque ultrices
						augue in enim euismod, sed facilisis quam eleifend. Aliquam ut
						libero eros. Vivamus vitae consectetur sem. Orci varius natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						Mauris eu imperdiet dui, eget dictum est. Donec ut placerat tellus.
						Integer imperdiet, risus at luctus lobortis, purus tortor feugiat
						nibh, sed pharetra eros leo eu enim. Duis feugiat pulvinar arcu, nec
						elementum est efficitur vel. Nam ante dui, varius at sodales vel,
						aliquam nec enim. Curabitur eu mi in nibh cursus convallis ultrices
						vitae ipsum. Etiam scelerisque mollis ligula sed eleifend. Fusce
						porta turpis ac placerat tristique. Etiam eu odio at risus lobortis
						imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et
						ultrices posuere cubilia curae;
					</p>
					<div className="ordi_tow_info">
						<h5>Pour plus d'informations</h5>
						<section className="ordi_photo_conf">
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

export default Ordination;
