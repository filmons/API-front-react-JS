import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "./SingleContent";

const calander = () => {



const [content, setContent] = useState([])

const fetcheMess = async () => {

    const {data} = await axios.get (`http://localhost:9000/V1/messes` )
        console.log(data.messes);


    setContent(data.messes)
  

}
useEffect(() => {
    fetcheMess();
   // eslint-disable-next-line
},[])

    return (
        <div>
           <span>calander</span>
           <div className="calander_parti">
               { content && content.map((c) => <SingleContent key={c.id}  
               id={c.id}
               jours={c.jours}
               dates={c.dates}
               
               /> )}

           </div>
        </div>
    )
}

export default calander
