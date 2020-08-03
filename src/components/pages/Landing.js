import React, { Component } from "react";
import { Router } from "@reach/router";

// modules
import News from "../modules/News";
import RecentProj from "../modules/RecentProj";

//style
import "./Landing.css";
import "../../utilities.css";

// images
import montan from "../../../public/montan.png";

class Landing extends Component {

	options = [ <News />, <RecentProj /> ];

	constructor(props){
		super(props);
		this.state = {
			option: 0,
		}
	}

	handleAM = event => {
		event.preventDefault();
		this.setState({option: 0});
	}

	handleRP = event => {
		event.preventDefault();
		this.setState({option: 1});
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
			<div className="selector">
				<button className="panel"
					onClick={this.handleAM.bind(this)}
					id={(this.state.option===0)?"selected":""}>
					about me.
				</button>
				<button className="panel"
					onClick={this.handleRP.bind(this)}
					id={(this.state.option===1)?"selected":""}>
					recent projects.
				</button>
			</div>
			{this.options[this.state.option]}
		</div>
	</>);}

}

export default Landing;
