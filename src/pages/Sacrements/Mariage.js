import React, { Component } from 'react'
import '../../assets/Sacrement/Mariage.css';
import photo from '../../source/equipes/eglise.png';




class Mariage extends React.Component {
    render() {
        return (
            <div className="continer_mariage">
               <div className="item_mariage">
                   <h1>Mariage</h1>
                   <p>Vous avez décidé de vous marier.</p>
                   <p> Votre paroisse est heureuse de vous accueillir et vous accompagner dans ce chemin.</p>
                   <p>Le mariage est un engagement pris devant Dieu. La dignité de cet engagement s’articule sur les quatre piliers que scelle l’échange des consentements : la liberté, la fidélité, l’indissolubilité et la fécondité.</p>
               </div>
               <div>
                   <h2>La préparation au mariage à Saint-Jean de Montmartre</h2>
                   <p>Le sacrement du mariage engage la vie entière, sa préparation demande donc du temps</p>
                   <ul>
                       <li>Se présenter un an avant la date de mariage envisagée</li>
                       <li>S’inscire auprès de l’accueil de l’église du lundi au samedi selon les horaires d'accueil. </li>
                   </ul>
                   
                   <p>Le temps de préparation au mariage s’articule autour de 2 rencontres avec d’autres couples qui se préparent également aux sacrements et animés par un couple préparateur et un prêtre. Ces rencontres proposées aux couples préparant un sacrement, permettent de se situer par rapport au Christ, à l’Église et à la foi des chrétiens.</p>
                   <p>Toutes les dates de rencontres vous seront communiquées lors de votre inscription. 

                    Vous serez également suivis en entretien individuel par le prêtre, le vicaire ou le diacre qui s’occupera notamment de remplir et signer votre dossier administratif.</p>
               </div>
               <div>
                   <h2>Le lieu de votre mariage</h2>
                   <p>Si vous souhaitez vous marier à l’église Saint Jean De Montmartre , vous préparerez la célébration avec le prêtre qui vous accompagne et qui célébrera votre mariage.</p>
                   <p>Si vous souhaitez vous marier en province ou à l’étranger, merci de contacter directement la paroisse dans laquelle se déroulera votre mariage</p>
               </div>
               <div className="Mar_tow_info">
                        <h5>Pour plus d'informations</h5>
                        <section className="des_photo_Mar">
                        <img className="ferst" src={photo} alt="photo des éqipe"/>
                            <div>
                            <h6>Elodie Soulié</h6>
                            <p>Responsable Baptême et Mariage</p>
                            <a>baptemes.mariages@saintjeandemontmartre.com</a>
                            </div>

                        </section>
            
                        </div>
            </div>
        )
    }
}

export default Mariage
