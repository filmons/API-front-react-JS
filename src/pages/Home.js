import React from "react";
import "../assets/Home.css";
import Calander from "../components/calander";

import Header from "../components/header";

class Home extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className="main_home">
					{/* <Slide /> */}
					{/* <header className="App-header">
				<div>
				<div/>
			</header> */}

					<div className="fir-para">
						<h1 className="first-h">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							convallis nunc quis diam cursus consectetur. Donec quis placerat
							turpis, at vestibulum mi. Etiam nec ex ac justo sagittis dapibus
							ac non risus. Proin vitae sollicitudin velit, vel pulvinar odio.
							Vivamus bibendum nibh ut turpis rhoncus faucibus. In posuere felis
							eu est dapibus ornare. Interdum et malesuada fames ac ante ipsum
							primis in faucibus. Etiam consequat non purus in dapibus. Aliquam
							arcu mi, accumsan sed velit vel, suscipit egestas magna. Orci
							varius natoque penatibus et magnis dis parturient montes, nascetur
							ridiculus mus. La vie d’une phrase aspire à la virgule ; la vie
							tout court appelle une respiration régulière, rythmée, toute faite
							d’inspiration, pour aller aux extrémités des sens. Et si l’Esprit
							saint était comme le souffle de notre vie, la virgule de notre
							âme. Ce feu qui intensifie nos actes, cette langue qui confère à
							nos mots un poids d’éternité, ce guide qui nous conduit dans un
							verger dont les rameaux se nommeraient : amour, joie, paix,
							patience, bonté, bienveillance, foi, humilité et maîtrise de soi.
							Seigneur, si tu retires ton souffle de notre vie, nous risquons
							d’expirer et de retourner à la poussière. Mais quand tu envoies
							ton Esprit saint, nous sommes recréés et la face de la terre en
							est renouvelée. Viens écrire de ton doigt les lignes droites et
							courbes de nos vies. Viens ponctuer de ta chaleureuse présence nos
							inspirations de chaque instant. Viens porter conseil aux témoins
							que nous sommes. Viens !
						</p>
					</div>
					<div className="sec-para">
						{/* <h1>L'Esprit Saint, virgule de l'âme</h1> */}
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							convallis nunc quis diam cursus consectetur. Donec quis placerat
							turpis, at vestibulum mi. Etiam nec ex ac justo sagittis dapibus
							ac non risus. Proin vitae sollicitudin velit, vel pulvinar odio.
							Vivamus bibendum nibh ut turpis rhoncus faucibus. In posuere felis
							eu est dapibus ornare. Interdum et malesuada fames ac ante ipsum
							primis in faucibus. Etiam consequat non purus in dapibus. Aliquam
							arcu mi, accumsan sed velit vel, suscipit egestas magna. Orci
							varius natoque penatibus et magnis dis parturient montes, nascetur
							ridiculus mus.
						</p>
					</div>
					<div className="th-para">
						{/* <h1>L'Esprit Saint, virgule de l'âme</h1> */}
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis nunc quis diam cursus consectetur. Donec quis placerat
							turpis, at vestibulum mi. Etiam nec ex ac justo sagittis dapibus
							ac non risus. Proin vitae sollicitudin velit, vel pulvinar odio.
							Vivamus bibendum nibh ut turpis rhoncus faucibus. In posuere felis
							eu est dapibus ornare. Interdum et malesuada fames ac ante ipsum
							primis in faucibus. Etiam consequat non purus in dapibus. Aliquam
							arcu mi, accumsan sed velit vel, suscipit egestas magna. Orci
							varius natoque penatibus et magnis dis parturient montes, nascetur
							ridiculus mus.
						</p>
					</div>
					<Calander />
				</div>
			</div>
		);
	}
}

export default Home;
