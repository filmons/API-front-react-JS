import React, { Component } from 'react'
import '../../assets/Sacrement/Communion.css'
import photo from '../../source/equipes/eglise.png';

class Comunition extends React.Component {
    render() {
        return (
            <div className="continer_comunition">
            <div className="item_comunition">
                <span>communion</span>
                <h1>La première communion ou le sacrement de l’eucharistie</h1>
                
                <p>Elle est proposée aux enfants pendant leur deuxième année de catéchisme. La préparation se fait durant l’année scolaire et nécessite une participation régulière à la messe dominicale ainsi qu'une assiduité au catéchisme. Les enfants sont accompagnés sur ce chemin vers leur première communion par des "Compagnons d'EmmaÜs". Ce sont des paroissien qui ont généreusement accepté d'accompagner un ou deux enfants pour échanger sur l'Eucharistie, participer à la messe ensemble, répondre à leurs questions...</p>
           
            <h3>La préparation à la première communion à Saint-Jean </h3>
            <p>Une séance parents-enfants pendant le temps du catéchisme consacrée à l’eucharistie et  plusieurs dimanches matin dans l’année en présence des parents et des Compagnons d’Emmaüs viennent ponctuer l'année de préparation à la première communion. A cela viennent s'ajouter d'éventuels rendez-vous entre l'enfant et son compagnon d' attitré. </p>
            <br/>
            <h2>La Communion à domicile</h2>
            <p>Les personnes âgées ou malades font partie intégrante de la communauté paroissiale. Même si elles sont dans l’incapacité de se déplacer, des paroissiens peuvent leur porter la Communion si elles le souhaitent. N'hésitez pas en faire la demande à l'accueil de l'église. </p>

            <div className="com_tow_info">
                        <h5>Pour plus d'informations</h5>
                        <section className="des_photo_com">
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

export default Comunition
