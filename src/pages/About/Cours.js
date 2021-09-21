import React,{useState, setState} from "react";
import axios from "axios";
import "../../assets/About/cours.css";
import "../About/btnLogOut";
class Cours extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			status: [""],
			maxLength: 20,
			disableTruncate: []
		};
	}

	showMore(itemId) {
		this.setState({
		  disableTruncate: [...this.state.disableTruncate, itemId],
		});
	  }
	
	  showLess(itemId) {
		const filterTruncatedEle = this.state.disableTruncate.filter(truncatedId => itemId !== truncatedId)
		this.setState({
		  disableTruncate: filterTruncatedEle,
		});
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
		const { data, disableTruncate, maxLength } = this.state;
		return (
			<div className="container_class">
				<div className="item-card">
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
								<button onClick={this.showMore} className="show-more">show more</button>
								<button onClick={this.showLess} className="show less">show more</button>
								
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
export default Cours;
