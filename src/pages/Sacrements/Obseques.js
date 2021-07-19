import React, { Component } from 'react'
import '../../assets/Sacrement/Obseques.css'
import photo from '../../source/equipes/eglise.png';

class Obseques extends React.Component {
    render() {
        return (
            <div className="continer_obseques">
               <div className="item_obseques">
               <span>Ordination</span>
                
               
                <p>L’ordination sacerdotale est la célébration liturgique où le prêtre reçoit de l’évêque le 2ème degré du sacrement que l’on appelle “sacrement de l’ordre” au degré de prêtre. Par l’ordination, le nouveau prêtre reçoit le caractère sacerdotal qui est une marque ineffaçable comme le caractère baptismal. Il entre aussi dans le “presbyterium”
                 qui est la communauté des prêtres d’un diocèse unis autour de leur évêque.</p>
                 <br/>
                 <p>Découvrez la vie de séminariste et une certaine vision de la vocation à travers l'interview 
                    d'Augustin Reille enregistrée quelques mois avant son ordination. </p>
                <div className="obse_tow_info">
                        <h5>Pour plus d'informations</h5>
                        <section className="obse_photo_conf">
                        <img className="ferst" src={photo} alt="photo des éqipe"/>
                            <div>
                            <h6>Elodie Soulié</h6>
                            <p>Responsable Baptême et Mariage</p>
                            <a>baptemes.mariages@saintjeandemontmartre.com</a>
                            </div>

                        </section>
            
                        </div>
            </div>
         </div>
        )
    }
}

export default Obseques
