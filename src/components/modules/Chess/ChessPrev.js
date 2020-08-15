import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../../utilities.css";
import "../Project.css";

// imgs
import nail from "../../../../public/chess.png";

// macros
const LINK = "/projects/chess";
const DESC1 =
	"Chess with HAL was my first attempt at developing an Artifical	\
	 Intelligence based opponent for a game. While the game of chess\
	 itself can be played with two humans or two AIs, the main 	\
	 feature is to allow the user to matchup against the AI.";

const DESC2 =
	"HAL, the AI, determines its next move based on the Minmax	\
	 algorithm, taking into consideration piece worth as well as its\
	 position to determine its immediate worth, and what it could 	\
	 be worth a few moves ahead. In the future, I plan to add a 	\
	 difficulty setting, adjusting additional noise to the AI's 	\
	 perceived position-value map to cause more unpredictable movements.";

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

export default ChessPrev;
