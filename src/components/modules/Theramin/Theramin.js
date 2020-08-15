import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../../utilities.css";
import "../Project.css";

// imgs
import theramin from "../../../../public/theramin.jpg";

// macros
const LINK = "/projects/theramin";
const DESC1 =
	"The Programmable Synthesizer on a Chip (a project made with   	\
	 Cypress\' Programmable SoC), features a touchscreen user-	\
	 interface for programming the harmonic structure of the output	\
	 as well as choosing preset structures (including a triangle	\
	 wave, square wave, and a precalculated guitar harmonic transform).";
const DESC2 =
	"The user is able to control the theramin output frequency by 	\
	 using the PSoC\'s onboard potentiometer, while adjusting the 	\
	 amplitude with an external photoresistor array. In this way,	\
	 the user has full control over their sound, with 729 different	\
	 possible programmed harmonic structures, not including presets.";

class Theramin extends Component {
	render(){return(<>
		<div className="Project-container">
			<img className="Thumbnail" src={theramin} />
			<div className="Project-body">
				<Link to={LINK}
					className="Project-title">
				programmable synthesizer on a chip.
				</Link>
				<div className="Project-date">
				spring 2020
				</div>
				<div className="Project-desc">
					{DESC1}
				</div>
				<div className="Project-desc">
					{DESC2}
				</div>
				<div className="Project-button">
				<div className="Project-learnmore-container">
				<Link to={LINK}
					className="Project-learnmore">
				learn more.
				</Link>
				</div>
				</div>
			</div>
		</div>
	</>);}
}

export default Theramin;
