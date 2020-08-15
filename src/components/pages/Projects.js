import React, { Component } from "react";
import { Router } from "@reach/router";

// projects
import TheraminPrev from 	"../modules/Theramin/TheraminPrev";
import FractalPrev from 	"../modules/Fractal/FractalPrev";
import FPGAPianoPrev from 	"../modules/FPGAPiano/FPGAPianoPrev";
import SkrtPrev from 		"../modules/Skrt/SkrtPrev";
import VVizPrev from 		"../modules/VViz/VVizPrev";
import TaxiPrev from 		"../modules/Taxi/TaxiPrev";
import SudokuPrev from 		"../modules/Sudoku/SudokuPrev";
import ChessPrev from 		"../modules/Chess/ChessPrev";
import SnakePrev from 		"../modules/Snake/SnakePrev";
import PongPrev from 		"../modules/Pong/PongPrev";
import HorsePrev from 		"../modules/Horse/HorsePrev";
import CigarPrev from 		"../modules/Cigar/CigarPrev";
import NootPrev from 		"../modules/Noot/NootPrev";

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
				<NootPrev />
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
			<div className="Project">
				<CigarPrev />
			</div>
		</>);
	}

}

export default Projects;
