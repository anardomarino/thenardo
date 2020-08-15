import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../../utilities.css";
import "../Project.css";
import "./Noot.css";

// imgs
import nail from "../../../../public/noot.png";
import demo from "../../../../public/nootdemo.png";

// macros
const LINK = "/projects/noot";
const SKILLS = ["Javascript","React.js","Node.js","Express.js","Webpack","npm",
		"Google OAuth API","MongoDB"]
const DESC1 = 
	"nootrino is an internal MIT service in the works to provide students \
	 a means of providing and accessing quality freelancing services,     \
	 opportunity listings, or group-finders to substitute for the hassle  \
	 of jumping between Facebook Groups, or sifting through dorm email    \
	 lists.";

const DESC2 = 
	"This service provides a unified internal test-zone for quality \
	 assurance in a rising industry of freelance service providers, \
	 while incentivizing the building of an on-campus community for \
	 life after quarantine. It seeks to bring people together in the\
	 organization of student-run causes and assure that there is    \
	 always an online community with a personable and local network.";

const DESC3 =
	"For testing purposes, this service is implementing a Google-based \
	 authorization system, but the final product will feature the internal \
	 student user authorization system Touchstone, allowing students to \
	 sign up with their MIT student accounts.";

class Noot extends Component {
	render(){return(<>
		<div className="Project-main-container">
			<div className="Project-image-container">
			<img className="Project-image" src={nail} />
			</div>
			<div className="Noot-title">
			nootrino
			</div>
			<div className="Project-main-body">
				<div className="Project-main-body-text">
				<div className="Project-body-text">{DESC1}</div>
				<div className="Project-body-text">{DESC2}</div>
				<div className="Project-body-text">{DESC3}</div>
				</div>
				<img className="Project-body-image" src={demo} />
			</div>
			<div className="Project-subdiv-title">
			tools.
			</div>
			<div className="Previews-container">
			{SKILLS
				.map((skill)=>{
					return(<div className="Project-skill">
						{skill}
					</div>)})}
			</div>
		</div>
	</>);}
}

export default Noot;
