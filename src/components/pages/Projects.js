import React, { Component } from "react";
import { Router } from "@reach/router";

// projects
import TheraminPrev from "../modules/TheraminPrev";
import FractalPrev from "../modules/FractalPrev";
import FPGAPianoPrev from "../modules/FPGAPianoPrev";
import SkrtPrev from "../modules/SkrtPrev";
import VVizPrev from "../modules/VVizPrev";
import TaxiPrev from "../modules/TaxiPrev";
import SudokuPrev from "../modules/SudokuPrev";
import ChessPrev from "../modules/ChessPrev";
import SnakePrev from "../modules/SnakePrev";
import PongPrev from "../modules/PongPrev";
import HorsePrev from "../modules/HorsePrev";

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
				<ChessPrev />
			</div>
			<div className="Project">
				<FractalPrev />
			</div>
			<div className="Project">
				<FPGAPianoPrev />
			</div>
			<div className="Project">
				<VVizPrev />
			</div>
			<div className="Project">
				<HorsePrev />
			</div>
			<div className="Project">
				<SkrtPrev />
			</div>
			<div className="Project">
				<TaxiPrev />
			</div>
			<div className="Project">
				<SudokuPrev />
			</div>
			<div className="Project">
				<SnakePrev />
			</div>
			<div className="Project">
				<PongPrev />
			</div>
		</>);
	}

}

export default Projects;
