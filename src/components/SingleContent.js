import React from "react";
import "../assets/component/singlecontent.css"

const SingleContent = ({ id, jours, dates }) => {
	return (
		<div className="sing-item-dats">
            <p> Jours de la messes </p>
            {jours}
			
			
            <p> dates de la messes et heures </p>
			{dates}{" "}
            <hr/>
           
		</div>
	);
};

export default SingleContent;
