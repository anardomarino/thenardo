import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../utilities.css";
import "./News.css";

// macros
const BODY1 =
	"Hey, I'm Anthony Nardomarino, and I'm a Junior at MIT studying \
	 Electrical Engineering and Computer Science with a focus in 	\
	 Artificial Intelligence.";

const BODY2 =
	"I'm particularly passionate about technology that I know can	\
	 have a lasting effect on humanity, superseding any impeding 	\
	 circumstances in front of us, or between us. For that reason, I\
	 enjoy finding out more about the intersections between art and \
	 science.";

const BODY3 =
	"I love prototyping new ideas and have been in the process of	\
	 improving my skills in Machine Learning recently for the 	\
	 purposes of computer vision and creating original music.";

class News extends Component {
	constructor(props){
		super(props);
	}

	render(){return(<>
		<div className="News-container u-fadein">
			<div className="News-headline">
				about me.
			</div>
			<div className="News-body">
				{BODY1}
			</div>
			<div className="News-body">
				{BODY2}
			</div>
			<div className="News-body">
				{BODY3}
			</div>
			<div className="Button-to">
			<Link to="/info" className="News-link">
				find out more.	
			</Link>
			</div>
		</div>
	</>);}
}

export default News;
