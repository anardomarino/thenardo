import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../../utilities.css";
import "../Project.css";

// imgs
import vviz from "../../../../public/vviz.png";

// macros

const DESC1 =
	"Vocab Viz is a system designed to allow a user to learn a language \
	 by immersion, a tactic that is found to be most effective, yet \
	 forgotten by most contemporary language-learning services.";

const DESC2 =
	"Vocal Viz implements object detection with OpenCV, using the 	\
	 object frame with the IBM-Watson Visual Recognition \
	 library to translate and label the object on the screen.";

const DESC3 =
	"Intended use with AR glasses or with other non-impeding 	\
	 computer vision resources.";

class VViz extends Component {
	render(){return(<>
		<div className="Project-container">
			<img className="Thumbnail" src={vviz} />
			<div className="Project-body">
				<Link to="/projects/vviz" 
					className="Project-title">
				vocab viz.
				</Link>
				<div className="Project-date">
				fall 2019
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
				<Link to="/projects/vviz"
					className="Project-learnmore">
				learn more.
				</Link>
				</div>
				</div>
			</div>
		</div>
	</>);}
}

export default VViz;
