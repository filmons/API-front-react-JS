import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "./SingleContent";
import "../assets/component/calanders.css";

const calander = () => {
	const [content, setContent] = useState([]);

	const fetcheMess = async () => {
		const { data } = await axios.get(`http://localhost:9000/V1/messes`);
		console.log(data.messes);

		setContent(data.messes);
	};
	useEffect(() => {
		fetcheMess();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="calander_parti">
			<div className="calander_parti_deex">
				<span>Informations pratiques</span>
				<p> Horaires actualisés en mai 2021.</p>
				<hr />
				{content &&
					content.map((c) => (
						<SingleContent
							key={c.id}
							id={c.id}
							jours={c.jours}
							dates={c.dates}
						/>
					))}
			</div>
		</div>
	);
};

export default calander;
