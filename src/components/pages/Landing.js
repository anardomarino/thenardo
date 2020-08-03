import React, { Component } from "react";
import { Router } from "@reach/router";

// modules
import News from "../modules/News";

//style
import "./Landing.css";
import "../../utilities.css";

// images
import montan from "../../../public/montan.png";

class Landing extends Component {
	constructor(props){
		super(props);
	}
	render(){return(<>
		<div className="Landing-container">
			<div className="Landing-quote-container">
				<div id="quote">
				"Any sufficiently advanced technology is
				indistiguishable from magic."
				</div>
				<div id="author">
				- Arthur C. Clarke
				</div>
			</div>
			<News />
		</div>
	</>);}

}

export default Landing;
