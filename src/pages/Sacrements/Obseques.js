import React from "react";
import "../../assets/Sacrement/Obseques.css";
import photo from "../../source/equipes/eglise.png";

class Obseques extends React.Component {
	render() {
		return (
			<div className="continer_obseques">
				<div className="item_obseques">
					<span className="hadersobs">Obsèques</span>
					<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
						finibus egestas commodo. Aliquam commodo justo sed ante tincidunt,
						vitae fermentum risus efficitur. Vivamus pellentesque neque et urna
						varius, quis iaculis ex placerat. Morbi elit arcu, lobortis at elit
						at, lacinia condimentum risus. Suspendisse a mi turpis. Donec
						sagittis mollis massa at mollis. Pellentesque tincidunt, tortor vel
						faucibus ullamcorper, lacus magna mattis libero, eu malesuada lacus
						urna nec sem. Sed id cursus diam. Nam dui metus, cursus et orci
						eget, efficitur dictum diam. Morbi efficitur nisi at augue ultrices
						facilisis. Donec in augue ut lectus fermentum porttitor interdum at
						leo. Morbi porttitor, libero eu luctus euismod, nibh dolor viverra
						elit, et molestie leo lectus consectetur augue. Etiam porttitor
						faucibus tincidunt. Proin id ex metus. Sed iaculis tincidunt
						sollicitudin. Duis eget mollis nisl. Curabitur mollis bibendum
						sapien, eget dignissim quam mollis eu. Fusce viverra maximus
						porttitor. Donec consequat non neque quis tincidunt. Pellentesque ut
						nunc mauris. Phasellus sit amet diam ipsum. Cras consectetur egestas
						velit at volutpat. Vestibulum viverra finibus justo, id rutrum
						lectus porta sit amet. Proin id dictum metus. Suspendisse potenti.
						Aenean eget augue ullamcorper, consectetur nunc in, facilisis nisl.
						Vivamus nec dolor sed ligula posuere egestas. Maecenas tellus
						tellus, bibendum id gravida eu, ornare non purus. Nam at tempor est,
						in tincidunt tellus. In ullamcorper erat sed posuere auctor. Donec
						diam nibh, semper id est volutpat, lobortis viverra dolor. Mauris
						malesuada faucibus felis sit amet vehicula. Suspendisse iaculis et
						libero vel lacinia. Quisque semper condimentum tempor. Morbi nec
						euismod neque. Mauris ut enim quis turpis blandit hendrerit ut a
						nunc. Aliquam consectetur nec velit vel ultricies.
					</p>

					{/* <p>Découvrez la vie de séminariste et une certaine vision de la vocation à travers l'interview 
                    d'Augustin Reille enregistrée quelques mois avant son ordination. </p> */}
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
						finibus egestas commodo. Aliquam commodo justo sed ante tincidunt,
						vitae fermentum risus efficitur. Vivamus pellentesque neque et urna
						varius, quis iaculis ex placerat. Morbi elit arcu, lobortis at elit
						at, lacinia condimentum risus. Suspendisse a mi turpis. Donec
						sagittis mollis massa at mollis. Pellentesque tincidunt, tortor vel
						faucibus ullamcorper, lacus magna mattis libero, eu malesuada lacus
						urna nec sem. Sed id cursus diam. Nam dui metus, cursus et orci
						eget, efficitur dictum diam. Morbi efficitur nisi at augue ultrices
						facilisis. Donec in augue ut lectus fermentum porttitor interdum at
						leo. Morbi porttitor, libero eu luctus euismod, nibh dolor viverra
						elit, et molestie leo lectus consectetur augue. Etiam porttitor
						faucibus tincidunt. Proin id ex metus. Sed iaculis tincidunt
						sollicitudin. Duis eget mollis nisl. Curabitur mollis bibendum
						sapien, eget dignissim quam mollis eu. Fusce viverra maximus
						porttitor. Donec consequat non neque quis tincidunt. Pellentesque ut
						nunc mauris. Phasellus sit amet diam ipsum. Cras consectetur egestas
						velit at volutpat. Vestibulum viverra finibus justo, id rutrum
						lectus porta sit amet. Proin id dictum metus. Suspendisse potenti.
						Aenean eget augue ullamcorper, consectetur nunc in, facilisis nisl.
						Vivamus nec dolor sed ligula posuere egestas. Maecenas tellus
						tellus, bibendum id gravida eu, ornare non purus. Nam at tempor est,
						in tincidunt tellus. In ullamcorper erat sed posuere auctor. Donec
						diam nibh, semper id est volutpat, lobortis viverra dolor. Mauris
						malesuada faucibus felis sit amet vehicula. Suspendisse iaculis et
						libero vel lacinia. Quisque semper condimentum tempor. Morbi nec
						euismod neque. Mauris ut enim quis turpis blandit hendrerit ut a
						nunc. Aliquam consectetur nec velit vel ultricies.
					</p>
					<h2>À retenir</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque luctus, lectus vitae suscipit tempus, ante eros
						tincidunt elit, et viverra mauris massa vitae turpis. Ut nibh
						libero, euismod et diam eget, fermentum rhoncus diam. Mauris congue
						at ipsum sed scelerisque.
					</p>
					<div className="obse_tow_info">
						<h5>Pour plus d'informations</h5>
						<section className="obse_photo_conf">
							<img className="ferst" src={photo} alt=" éqipe" />
							<div className="description_fO_un">
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

export default Obseques;
