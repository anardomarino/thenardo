import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../utilities.css";
import "./Project.css";

// imgs
import nail from "../../../public/horse.jpg";

// macros
const LINK = "/projects/horse";
const DESC1 =
	"My Horseracing Prediction System is a compound product of several\
	 areas of work including the study of Thoroughbred Horse Behavior,\
	 the study of Handicapping, classifying horse behaviors, webscraping,\
	 and determining descriptive attributes to track in a horse's results\
	 to be able to accurately predict the winner of a given race.";

const DESC2 =
	"Work on this project has been ongoing since the summer of 2018, and\
	 is something I return to often, applying what I've learned in the \
	 realm of machine learning to track more descriptive heuristics, \
	 or to simply restructure the neural network.";

class HorsePrev extends Component {
	render(){return(<>
		<div className="Project-container">
			<img className="Thumbnail" src={nail} />
			<div className="Project-body">
				<Link to={LINK}
					className="Project-title">
				ML horseracing prediction system.
				</Link>
				<div className="Project-date">
				summer 2019
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

export default HorsePrev;
