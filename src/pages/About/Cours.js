import React from "react";
import axios from "axios";
import "../../assets/About/cours.css";
import "../About/btnLogOut";
class Cours extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			status: [""],
		};
	}
	getData = async () => {
		const response = await axios.get("http://localhost:9000/V1/cours");
		this.setState({
			data: response.data.cours,
		});
		console.log(this.state.data);
	};
	componentDidMount() {
		this.getData();
	}
	deleteToken() {
		localStorage.clear();
		console.log("localstorage", this.localstorage);
	}
	render() {
		return (
			<div className="container_class">
				<div className="class-card">
					<div className="logout">
						
						<a onClick={this.deleteToken} href="/">
							logOutT
						</a>
					</div>
					{this.state.data.map((cours, index) => {
						return (
							<div className="item" key={index}>
								<h3>{cours.titre}</h3>
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
