import React, { Component } from 'react';
import '../../assets/Sacrement/Bateme.css';
import photo from '../../source/equipes/eglise.png';


class Bateme extends React.Component {
    render() {
        return (
            <div className="continer_bateme">
               <div className="item_batem">
                   <span>Bateme </span>
                   <h2>Baptême des tout-petits (0 à 3 ans)</h2>
                   <p> Deux réunions préparent les baptêmes 
                   Demander le baptême pour son enfant, engage les parents à éveiller la foi dans son
                        cœur en lui donnant une éducation chrétienne et en l’inscrivant par exemple à l’éveil 
                        à la foi puis au catéchisme lorsqu’il en aura l’âge pour qu’il puisse découvrir et vivre 
                        de la foi chrétienne. Plus tard, lorsque l’enfant sera adolescent, il s’appropriera son baptême
                         en prononçant sa Profession de Foi.
                        Il dira lui-même le « je crois » du croyant.</p>
                        <h3>La préparation du baptême à Saint-Jean de Montmartre</h3>
                        <ul>
                            <li>La première rencontre préalable aux sacrements se déroule tout un dimanche en présence d’autres couples se préparant au baptême de leur enfant et des couples préparant leur mariage. Ces rencontres permettent de se situer par rapport au Christ, à l’Eglise et à la foi des chrétiens. Cette réunion est animée par un couple animateur et un prêtre.</li>
                            <li>La deuxième, si le baptême a lieu à Saint Jean de Montmartre, se fait 10 jours avant la célébration et permet de la préparer avec le célébrant.</li>
                        </ul>
                        <div>

                        <p>info pratiques</p>
                        <ul>
                            <li>Les baptêmes sont célébrés après la messe de Dimanche, vers 12H00.</li>
                            <li>Toutes les dates de préparations et célébrations vous seront communiquées lors de votre inscription.</li>
                            
                            <li>La demande de baptême ne peut être faite que par le père ou la mère en personne, avec l’accord de l’autre parent en vous déplaçant à l’accueil dans l’église le lundi et le samedi 10h à 12h et du mardi au vendredi de 17h à 18h30.</li>
                            <li>Le parrain et la marraine doivent avoir au moins 16 ans et doivent être baptisés, confirmés et communiés dans l’Eglise Catholique. Il est possible de ne désigner qu’un parrain ou une marraine</li>
                        </ul>
                        <p>Comptez un délai d’au moins 4 mois environ entre l’inscription et la date du baptême. Si le baptême est célébré à Saint Jean de Montmartre, merci de fournir un acte de naissance de votre enfant ainsi qu’une  copie d’acte de baptême du parrain et de la marraine que vous pouvez envoyer par mail à baptemes.mariages@saintjeandemontmartre.com.</p>
                        <p>Combien coûte le baptême ?

                        Les sacrements sont toujours gratuits.
                        Pourtant, sachez qu’en France l’Eglise ne vit qu’avec les dons des chrétiens. Vous pouvez donc faire un don à la paroisse.  (bon à savoir ; votre don est déductible des impôts, n'hésitez pas à demander un reçu fiscal !)</p>
                        <h3>Baptême des enfants en âge scolaire</h3>
                        <p>Si votre enfant n’est pas baptisé, il peut suivre une préparation au baptême, en participant aux séances d’éveil à la foi (4 à 7 ans), catéchisme (8 à 11 ans) ou d’aumônerie (12 ans et plus). Les parents sont invités à accompagner leurs enfants dans ce chemin de préparation.</p>
                        <br/>
                        <p>La célébration d’un baptême à partir de 8 ans se réalise en plusieurs étapes qui permettent une démarche progressive vécue en lien avec la communauté paroissiale et un chemin d’initiation chrétienne pour les enfants comme pour leurs parents. </p>
                        <ul>
                            <lo>À la première étape l’enfant exprime sa demande de baptême devant l’assemblée lors de la messe avec l’accord de ses parents et il est marqué du signe de la croix,</lo>
                            <lo>Lors de la deuxième étape, l’enfant accueille la parole de Dieu avec la remise de l’Évangile.</lo>
                            <lo>La troisième étape est un "rite pénitentiel", avec imposition des mains, ou l’on reconnaît la difficulté de suivre Jésus. Elle se situe souvent pendant le carême.</lo>
                            <lo>Enfin, c’est la célébration du baptême avec le profession de Foi, le rite de l’eau, le rite de l’onction, la remise du vêtement blanc et du cierge pascal. Le baptême a lieu habituellement au cours d’une messe et tout le monde peut laisser éclater sa joie ! </lo>
                            <p>Pour plus d’informations contacter Elodie Soulie : baptêmes.mariages@saintjeandemontmartre.com</p>
                        </ul>
                        <h3>Baptême des adultes</h3>
                        <p>On peut se préparer au baptême à tout âge. Les adultes qui se préparent au baptême sont appelés catéchumènes. Le chemin vers le baptême se fait avec une équipe de la paroisse, qui se réunit chaque mois afin de se mettre à l'écoute de la parole,  et l’aide d’un accompagnement individuel. 

                        + d'infos sur le catéchuménat. 

                        Pour plus de renseignements vous pouvez contacter : Augustin Chévrier  ac.chevrier@saintjeandemontmartre.com

                        </p>
                        <div>

                        </div>
                        <h4>À retenir</h4>
                        <p>Il est possible de demander et recevoir le baptême à tout âge. Différentes préparations sont proposées selon les âges.</p>
                        <div className="tow_info">
                        <h5>Pour plus d'informations</h5>
                        <section className="des_photo">
                        <img className="ferst" src={photo} alt="photo des éqipe"/>
                            <div>
                            <h6>Elodie Soulié</h6>
                            <p>Responsable Baptême et Mariage</p>
                            <a>baptemes.mariages@saintjeandemontmartre.com</a>
                            </div>

                        </section>
                        <section className="des_photo">
                       
                        <img className="ferst" src={photo} alt="photo des éqipe"/>
                            <div className="text">
                            <h4>Elodie Soulié</h4>
                            <p>Responsable Baptême et Mariage</p>
                            <a>baptemes.mariages@saintjeandemontmartre.com</a>
                            </div>

                        </section>
                        </div>

                        </div>
               </div>
            </div>
        )
    }
}

export default Bateme
