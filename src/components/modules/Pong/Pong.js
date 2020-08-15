import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../../utilities.css";
import "../Project.css";

// imgs
import nail from "../../../../public/pong.png";

// macros
const LINK = "/projects/pong";
const DESC1 =
	"Just your classic Pong game, but with a holiday-spirited twist. \
	 This really just consisted of a constantly changing color scheme\
	 of the game, involving the two colors that are signature to the \
	 spirit of Christmas.";

const DESC2 =
	"This was my first attempt at making a game from Java, and a worthy\
	 devotion of time during my AP Computer Science course, as it can  \
	 distract up to two human players at once!";

class Pong extends Component {
	render(){return(<>
		<div className="Project-container">
			<img className="Thumbnail" src={nail} />
			<div className="Project-body">
				<Link to={LINK}
					className="Project-title">
				holiday pong.
				</Link>
				<div className="Project-date">
				winter 2017
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

export default Pong;
