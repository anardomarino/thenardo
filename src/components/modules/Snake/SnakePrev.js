import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../../utilities.css";
import "../Project.css";

// imgs
import nail from "../../../../public/snake.png";

// macros
const LINK = "/projects/snake";
const DESC1 =
	"Snakey is a Java-based applet in which a player can play the 	\
	 well-known game of snake, in which a snake is controllable and must \
	 eat the green squares in order to grow, all while avoiding the red \
	 walls and its own tail.";

const DESC2 =
	"The development of Snakey taught me a valuable lesson in making \
	 games that become progressively more algorithmically intensive  \
	 as time goes on, leading me to have to develop a more efficient \
	 abstraction of the snake body.";

class SnakePrev extends Component {
	render(){return(<>
		<div className="Project-container">
			<img className="Thumbnail" src={nail} />
			<div className="Project-body">
				<Link to={LINK}
					className="Project-title">
				snakey.
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

export default SnakePrev;
