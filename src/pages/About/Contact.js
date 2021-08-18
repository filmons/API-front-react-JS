import React from 'react';
//import acxios from 'acxios'
import "../../assets/About/contact.css"

class contact extends React.Component{

    render(){
        return(
            <section>
                <div className="continer_contact">
                    <div className="item_caontact" >
                      <h2> remplissiez cet formulere pour s'il vous plait</h2>
                      <br/>
                    <label htmlFor="email">
						<b>last Name</b>
					</label>
					<input
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
						type="text"
						placeholder="Enter Email"
						name="email"
						required
						onChange={this.handleChange}
					/>
                     <label htmlFor="text">
                         <b>Enter your therde description:</b>
                         </label>
        <input className="contact_input" type="text
        " placeholder="description "
         name="description" 
         required />
        
        <button className="sub_but">
             submite</button>
        
                    </div>
                </div>
            </section>
        )
    }
}

export default contact
// import React from 'react';
// import emailjs from 'emailjs-com';

// import './ContactUs.css';

// export default function ContactUs() {

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   }

//   return (
//     <form className="contact-form" onSubmit={sendEmail}>
//       <input type="hidden" name="contact_number" />
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }