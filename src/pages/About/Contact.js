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