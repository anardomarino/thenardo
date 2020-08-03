import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../utilities.css";
import "./Project.css";

// imgs
import skrt from "../../../public/sqrt.png";

// macros
const LINK = "/projects/skrt";
const DESC1 =
	"SKRT is a real-time online kart-racing game with up to four	\
	 players able to play together at once.";

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

export default SkrtPrev;
