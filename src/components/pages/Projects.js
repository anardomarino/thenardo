import React, { Component } from "react";
import { Router } from "@reach/router";

// projects
import TheraminPrev from "../modules/TheraminPrev";
import FPGAPianoPrev from "../modules/FPGAPianoPrev";
import SkrtPrev from "../modules/SkrtPrev";
import VVizPrev from "../modules/VVizPrev";
import TaxiPrev from "../modules/TaxiPrev";

//style
import "./Projects.css";
import "../../utilities.css";

// images

class Projects extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(<>
			<div className="Page-title u-fadein">
			projects.
			</div>
			<div className="Project">
				<TheraminPrev />
			</div>
			<div className="Project">
				<FPGAPianoPrev />
			</div>
			<div className="Project">
				<VVizPrev />
			</div>
			<div className="Project">
				<SkrtPrev />
			</div>
			<div className="Project">
				<TaxiPrev />
			</div>
		</>);
	}

}

export default Projects;
