import React from 'react'
import '../../assets/Enfance /Cristanissme.css'
import photo from "../../source/equipes/eglise.png"

 class Cristianisme   extends React.Component {
    render() {
        return (
         <div className="continer_cristaniseme">
             <div className="item_cristanism">
                    <h1>L'Esprit Saint, virgule de l'âme</h1>
                    <img src={photo} alt="photo des éqipe" />

                <p>
            L'Esprit Saint, virgule de l'âme
            Vous avez repéré, dans la lecture d’un texte, ces signes à peine visibles qui permettent de respirer : les virgules ! 
            Très discrets, ces traits courbés juxtaposent les propositions, les ordonnent les unes aux autres. Utiles, indispensables,
            les virgules donnent à l’intérieur d’une phrase de pauser les mots, peser les paroles, percevoir leur légère pesanteur et ainsi
            servir leur sens.

            La vie d’une phrase aspire à la virgule ; la vie tout court appelle une respiration régulière, 
            rythmée, toute faite d’inspiration, pour aller aux extrémités des sens. Et si l’Esprit saint était comme le souffle de notre vie,
            la virgule de notre âme. Ce feu qui intensifie nos actes, cette langue qui confère à nos mots un poids d’éternité, ce guide qui
            nous conduit dans un verger dont les rameaux se nommeraient : amour, joie, paix, patience, bonté, bienveillance, foi, humilité et
            maîtrise de soi.

            Seigneur, si tu retires ton souffle de notre vie, nous risquons d’expirer et
            de retourner à la poussière. Mais quand tu envoies ton Esprit saint, nous sommes 
            recréés et la face de la terre en est renouvelée.
            Viens écrire de ton doigt les lignes droites et courbes de nos vies.
            Viens ponctuer de ta chaleureuse présence nos inspirations de chaque instant.
            Viens porter conseil aux témoins que nous sommes.
            Viens !
            </p>
    </div>
</div>
            )
        }
    }

export default Cristianisme 
