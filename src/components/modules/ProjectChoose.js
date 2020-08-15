import React, { Component } from "react";

// pages
import Noot	from 	"./Noot/Noot";
import Theramin from 	"./Theramin/Theramin";
import Chess 	from 	"./Chess/Chess";
import Fractal 	from 	"./Fractal/Fractal";
import FPGAPiano from 	"./FPGAPiano/FPGAPiano";
import VViz 	from 	"./VViz/VViz";
import Horse 	from 	"./Horse/Horse";
import Skrt 	from 	"./Skrt/Skrt";
import Taxi 	from 	"./Taxi/Taxi";
import Sudoku 	from 	"./Sudoku/Sudoku";
import Snake 	from 	"./Snake/Snake";
import Pong 	from 	"./Pong/Pong";
import Cigar 	from 	"./Cigar/Cigar";

class ProjectChoose extends Component {
	guide = {
		"noot"		: <Noot />,
		"theramin" 	: <Theramin />,
		"chess"		: <Chess />,
		"fractal"	: <Fractal />,
		"fpgapiano"	: <FPGAPiano />,
		"vviz"		: <VViz />,
		"horse"		: <Horse />,
		"skrt"		: <Skrt />,
		"taxi"		: <Taxi />,
		"sudoku"	: <Sudoku />,
		"snake"		: <Snake />,
		"pong"		: <Pong />,
		"cigar"		: <Cigar />,
	}

	constructor(props){
		super(props);
	}

	render(){
		const point = this.props.choose;
		return(<>
			{this.guide[point]}
		</>);
	}
}

export default ProjectChoose;
