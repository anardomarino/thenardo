import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../../utilities.css";
import "../Project.css";

// imgs
import nail from "../../../../public/sudoku.png";

// macros
const LINK = "/projects/sudoku";
const DESC1 =
	"The Sudoku Solver was the project I felt to be a culmination of my \
	 work in Java at the conclusion of the AP Computer Science course.  \
	 It features a system that logically steps through a sudoku puzzle  \
	 and abstracts a cell into an object that tracks necessary information\
	 to determine its value.";

const DESC2 = 
	"In the event of a logical step blocker, the puzzle begins a recursive\
	 brute force based step through the puzzle until it's completed.";

class SudokuPrev extends Component {
	render(){return(<>
		<div className="Project-container">
			<img className="Thumbnail" src={nail} />
			<div className="Project-body">
				<Link to={LINK}
					className="Project-title">
				sudoku solver.
				</Link>
				<div className="Project-date">
				spring 2018
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

export default SudokuPrev;
