import React from "react";
import "../../assets/signup.css";
import axios from "axios";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../../assets/login.css";
toast.configure();



class signup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			city: "",
			password: "",
			errorFirtName: false,
			errorLastName: false,
			errorEmail: false,
			errorPassword: false,
			errorCity: false,
		};
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	handleClick = () => {
		if (this.state.first_name === "") {
			this.setState({ errorFirtName: true });
		} else {
			this.setState({ errorFirtName: false });
		}
		if (this.state.email === "") {
			this.setState({ errorEmail: true });
		} else {
			this.setState({ errorEmail: false });
		}

		if (this.state.last_name === "") {
			this.setState({ errorLastName: true });
		} else {
			this.setState({ errorLastName: false });
		}
		if (this.state.password === "") {
			this.setState({ errorPassword: true });
		} else {
			this.setState({ errorPassword: false });
		}
		if (this.state.last_name === "") {
			this.setState({ errorLastName: true });
		} else {
			this.setState({ errorLastName: false });
		}
		if (this.state.city === "") {
			this.setState({ errorCity: true });
		} else {
			this.setState({ errorCity: false });
		}

		const options = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password,
			city: this.state.city,
		};
		console.log(options);
		axios
			.post("http://localhost:9000/V1/signup", options, {
				headers: { "content-type": "application/json" },
			})
			.then((data) => {
				console.log(data);
				toast.success(data.data.message, {position: toast.POSITION.TOP_CENTER})
				this.props.history.push("/login");
			})
			.catch((error) => toast.error(error.response.data.message));
		console.log(options);
		//this.props.history.push('/login')
	};

	render() {
		return (
			<div className="container">
				<div className="form">
					<h1 className="header_signup">Sign Up</h1>
					<p>Créer un compte</p>
					
				</div>
				<div className="lebls">
					<label htmlFor="first_name">
						<b>Prénom</b>
					</label>
					<input
						style={
							this.state.errorFirtName
								? { border: "1px solid red" }
								: { border: "" }
						}
						type="text"
						id="first_name"
						placeholder="Enter first Name"
						name="first_name"
						required
						onChange={this.handleChange}
					/>
				

					<label htmlFor="email">
						<b>Nom</b>
					</label>
					<input
						style={
							this.state.errorLastName
								? { border: "1px solid red" }
								: { border: "" }
						}
						type="text"
						placeholder="Enter last Name"
						name="last_name"
						required
						onChange={this.handleChange}
					/>

					<label htmlFor="email">
						<b>Email</b>
					</label>
					<input
						style={
							this.state.errorEmail
								? { border: "1px solid red" }
								: { border: "" }
						}
						type="text"
						placeholder="Enter Email"
						name="email"
						required
						onChange={this.handleChange}
					/>

					<label htmlFor="password">
						<b>Password</b>
					</label>
					<input
						style={
							this.state.errorPassword
								? { border: "1px solid red" }
								: { border: "" }
						}
						type="password"
						placeholder="Enter Password"
						name="password"
						required
						onChange={this.handleChange}
					/>

					<label htmlFor="city">
						<b>Ville</b>
					</label>
					<input
						style={
							this.state.errorCity
								? { border: "1px solid red" }
								: { border: "" }
						}
						type="text"
						placeholder="Enter City"
						name="city"
						required
						onChange={this.handleChange}
					/>

					<p>
					En créant un compte, vous acceptez nos{" "}
						<a href="/polisie" style={{ color: "dodgerblue " }}>
							Terms & Privacy
						</a>
						.
					</p>

					<div className="clearfix">
						<p>
							<Link to="/">
								<button type="button" className="cancelbtn">
									Cancel
								</button>
							</Link>
							<button
								onClick={this.handleClick}
								type="submit"
								className="signupbtn"
							>
								Sign Up
							</button>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default signup;
