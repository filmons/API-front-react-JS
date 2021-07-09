import React from 'react';
import "../../assets/Equipes.css";
import photo from '../../source/equipes/eglise.png';


class Equipe extends React.Component {
    
    render() {
        return (
            <section>
            <h1>les equipes</h1>
           
        <div className="all_img">
            
            <div className="fir-para">
            <h1>L'Esprit Saint, virgule de l'âme</h1>
            <img src={photo} />
           </div>
           <div className="fir-para">
            <h1>L'Esprit Saint, virgule de l'âme</h1>
            <img src={photo} />
           </div>
           <div className="fir-para">
            <h1>L'Esprit Saint, virgule de l'âme</h1>
            <img src={photo} />
           </div>
           <div className="fir-para">
            <h1>L'Esprit Saint, virgule de l'âme</h1>
            <img src={photo} />
           </div>
           <div className="fir-para">
            <h1>L'Esprit Saint, virgule de l'âme</h1>
            <img src={photo} />
           </div>
           <div className="fir-para">
            <h1>L'Esprit Saint, virgule de l'âme</h1>
            <img src={photo} />
           </div>
           <div className="fir-para">
            <h1>L'Esprit Saint, virgule de l'âme</h1>
            <img src={photo} />
           </div>

            <div className="th-para">
            <h1>L'Esprit Saint, virgule de l'âme</h1>
            <img src={photo} />
            </div>
            
        </div>
        </section>

            
        )
    }
}

export default Equipe;
