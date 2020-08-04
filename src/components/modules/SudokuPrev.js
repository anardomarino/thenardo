import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../utilities.css";
import "./Project.css";

// imgs
import nail from "../../../public/sudoku.png";

// macros
const LINK = "/projects/sudoku";
const DESC1 =
	"";

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
				<div className="Project-button">
				<Link to={LINK}
					className="Project-learnmore">
				learn more.
				</Link>
				</div>
			</div>
		</div>
	</>);}
}

export default SudokuPrev;
