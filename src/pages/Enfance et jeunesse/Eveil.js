import React from 'react'
import '../../assets/Enfance /Eveil.css'

import photo from "../../source/equipes/eglise.png"

class Eveil extends React.Component {
  render() {
    return (
     <div className="continer_cristaniseme">
         <div className="item_cristanism">
                <h1>L'éveil à la foi</h1>
                <p>L’éveil à la foi s’adresse aux enfants de 4 à 7 ans (maternelle au CE1) accompagnés de leurs parents, certains dimanches à 10h15 et pendant la célébration de la messe.</p>
                <img src={photo} alt="photo des éqipe" />

<h2>L'éveil à la foi en pratique</h2>
            <p>
            Le rendez-vous est donné à l’entrée de l’Eglise puis les enfants se retrouvent pour partager autour de l’évangile du jour un temps de chants, de paroles, 
            de prières et d’activités de loisirs créatifs. Un moment privilégié pour découvrir Dieu accompagné de leurs parents. A chaque fin de séance, les enfants rejoignent l’assemblée 
            au moment de la communion pour présenter leurs réalisations, chanter, et participer à la bénédiction finale. A Saint-Jean de Montmartre, nous avons la chance d’avoir de nombreux parents 
            qui ont des talents de musiciens ce qui rend les séances encore plus jolies !
        </p>
        <h3>Bon à savoir </h3>
        <p>
        Retrouvez le planning des séances d'éveil à la foi pour l'année scolaire 2021/22. 
        Accompagnés du Père Selvan, ce sont les parents qui doivent animer la séance.
         Un roulement est établi entre les parents.
        </p>
</div>
</div>

        )
    }
}

export default Eveil
