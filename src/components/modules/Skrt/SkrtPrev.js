import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../../utilities.css";
import "../Project.css";

// imgs
import skrt from "../../../../public/sqrt.png";

// macros
const LINK = "/projects/skrt";
const DESC1 =
	"SKRT is a real-time online kart-racing game with up to four	\
	 players able to play together at once. Ready up in the welcome \
	 lobby while the server ensures that 100% of players are ready 	\
	 to begin before the race starts!";

const DESC2 =
	"Players may petition to generate new tracks, or play the same 	\
	 one over and over again! There are three track difficulties,	\
	 each generating a racetrack with a different obstacle-to-coin	\
	 ratio. Obstacles will slow you down, while coins speed you up.";

const DESC3 =
	"Collect powerups and launch Mario-Kart inspired 'Red Shells' 	\
	 your opponents must dodge. SKRT comes in a sleek 3D-printed	\
	 PLA case in the shape of a Gameboy, featuring retro buzzer 	\
	 sound effects.";

class SkrtPrev extends Component {
	render(){return(<>
		<div className="Project-container">
			<img className="Thumbnail" src={skrt} />
			<div className="Project-body">
				<Link to={LINK}
					className="Project-title">
				SKRT (six-oh-eight kart racing thing).
				</Link>
				<div className="Project-date">
				spring 2019
				</div>
				<div className="Project-desc">
					{DESC1}
				</div>
				<div className="Project-desc">
					{DESC2}
				</div>
				<div className="Project-desc">
					{DESC3}
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

export default SkrtPrev;
