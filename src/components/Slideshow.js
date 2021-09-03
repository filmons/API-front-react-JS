import React from 'react';
import { Slide } from 'react-slideshow-image';
import "../assets/component/slideshow.css"

import photo1 from '../source/1.png';
import photo2 from '../source/2.png';
import photo3 from '../source/3.png';
import photo4 from '../source/4.png';
import photo5 from '../source/5.png';
import photo6 from '../source/6.png';
import photo7 from '../source/7.png';
import photo8 from '../source/8.png';

const proprietes = {
    duration:9000,
    transitionDuration:500,
    Infinity:true,
    indicators:true,

}





const Slideshow = () => {

    return (

        <div className=" containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={photo1} alt="not"/>
                    </div>

                </div>
                <div className="each-slide">
                    <div>
                        <img src={photo2} alt="not"/>
                    </div>

                </div>
                 
            </Slide>
            
        </div>
    )
}

export default Slideshow