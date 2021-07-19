import React from 'react'
import '../../assets/Sacrement/Confirmation.css'
import photo from '../../source/equipes/eglise.png';



class Confirmation extends React.Component {
    render() {
        return (
            <div className="continer_confirmation">
            <div className="item_confirmation">
                <span>Confirmation</span>
                
               
                <p>La confirmation est le sacrement qui transmet la force de l’Esprit Saint, nécessaire pour toute vie chrétienne adulte. Ce sacrement est proposé aux jeunes à partir de 16 ans, dans le cadre de l’aumônerie et aux adultes avec l’équipe du catéchuménat.</p>
                <div className="con_tow_info">
                        <h5>Pour plus d'informations</h5>
                        <section className="des_photo_con">
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

export default Confirmation
