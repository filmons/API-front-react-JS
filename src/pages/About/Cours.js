import React , {Link}from "react";
import axios from "axios";
import "../../assets/About/cours.css";
import "../About/btnLogOut";
//import btnLogOut from "../About/btnLogOut";
class Cours extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
		};
	}
	getData = async () => {
		const response = await axios.get("http://localhost:8000/V1/cours");
		this.setState({
			data: response.data.cours,
		});
		console.log(this.state.data);
	};
	componentDidMount() {
		this.getData();
	}
	render() {
		return (
			<div className="container_calss">
				
				<div className="class-card">
				<div className="logout"> <a href="/">logOut</a></div>
				
					{this.state.data.map((cours, index) => {
						return (
							<div className="item" key={index}>
								<p>{cours.titre}</p>
								<p>{cours.description_one}</p>
								<p>{cours.description_two}</p>
								<p>{cours.description_three}</p>
							</div>
						);
					})}
				</div>
				
			</div>
		);
	}
}
export default Cours;
