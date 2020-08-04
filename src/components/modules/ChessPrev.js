import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../utilities.css";
import "./Project.css";

// imgs
import nail from "../../../public/chess.png";

// macros
const LINK = "/projects/chess";
const DESC1 =
	"";

class ChessPrev extends Component {
	render(){return(<>
		<div className="Project-container">
			<img className="Thumbnail" src={nail} />
			<div className="Project-body">
				<Link to={LINK}
					className="Project-title">
				play chess with HAL.
				</Link>
				<div className="Project-date">
				spring 2020.
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

export default ChessPrev;
