import React from 'react'
//import {withRouter} from 'react-router-dom'
import '../assets/component/footer.css'
import Facebook from '../source/Facebook.svg'
import icon from '../source/icon.png'


class Footer extends React.Component {


        
    

    render(){
        
        return (
            <footer>
                <div className="sociaux">
                
                    <p>Paroisse Catholique Emanuel  de Montreuil Paroisse <br/>Catholique Emanuel  de Montreuil</p>
                
                   
                    
                </div>
                <div className="sociaux">
                <p>Paroisse Saint Jean de Montmartre, 21 rue des Abbesses, 75018  
                       Paris  |  contact@saintjeandemontmartre.com 
                </p>
                

                </div>
            </footer>
        )
    }
}

export default Footer;