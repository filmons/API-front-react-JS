import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

import "../../assets/About/contact.css";

const Contact = () => {
	const [successMessage, setSuccessMessage] = useState("");
	const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_pctcy5l";
	const temlateID = "template_pctcy5l";
	const userID = "user_WVUPpv9KoZ5CiYebbx9Fk";

	const onSubmit = (data, r) => {
		sendEmail(
			serviceID,
			temlateID,
			{
				name: data.name,
				phone: data.phone,
				email: data.email,
				subject: data.subject,
				description: data.description,
			},
			userID
		);
		r.target.reset();
	};
    const sendEmail = (serviceID, temlateID, variables, userID) => {
		emailjs
			.send(serviceID, temlateID, variables, userID)
			.then(() => {
				setSuccessMessage(
					"La formulair a était envoyé avec succès! je vous contacterai dès que possible"
				);
			})
			.catch((err) => console.error(`something went wrong ${err}`));
	};


	return (
		<section>
			<div className="continer_contact">
                    <form onSubmit={handleSubmit(onSubmit)}>
				<div className="item_caontact">
					<h2> remplissiez cet formulere pour s'il vous plait</h2>
				<span className="sccese-massege-E">{successMessage}</span>

					<br />
					<label htmlFor="email">
						<b>Nom</b>
					</label>
					<input
						type="text"
						placeholder="Enter last Name"
						name="name"
						defaultValue=""
						{...register("name", {
							required: "inter your mail plaes",
							maxLength: 20,
							message: "plese use a name a maximame with 20 caracters ",
						})}
					/>

					<label htmlFor="email">
						<b>Email</b>
					</label>
					<input
						type="text"
						placeholder="Enter Email"
						name="email"
						{...register("email", {
							required: "Plese provide your email ",
							pattern: /^\S+@\S+$/i,
							message: "plese use a correct mail",
						})}
					/>
					<label htmlFor="text">
						<b>Écrivez votre message</b>
					</label>
					<textarea
						className="contact_input"
						type="text"
						placeholder="Écrivez votre message ici"
						name="description"
						{...register("description", {
							required: "Plase inter your  text",
							message: "plese fill your  the description ",
						})}
                        ></textarea>

					<button className="sub_but">submite</button>
            </div>
            </form>
			</div>
				
		</section>
	);
};

export default Contact;
