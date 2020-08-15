import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../../utilities.css";
import "../Project.css";

// imgs
import nail from "../../../../public/noot.png";

// macros
const LINK = "/projects/noot";
const DESC1 =
	"nootrino is my current project in progress; it is a tool intended \
	 for MIT internal freelance service listing, as well as group-finding \
	 and product-listing (in areas of art, textbooks, dorm necessities, etc).";

const DESC2 = 
	"Exchanges can be listed based on group belonging, specifically in \
	 member-created groups or listed to campus as a whole. Members can \
	 identify listings under a particular group, which can be useful   \
	 for project member-finding, tutor matching, and many other 	   \
	 student-to-student campus interactions.";

class NootPrev extends Component {
	render(){return(<>
		<div className="Project-container">
			<img className="Thumbnail" src={nail} />
			<div className="Project-body">
				<Link to={LINK}
					className="Project-title">
				nootrino freelancing webservice.
				</Link>
				<div className="Project-date">
				summer 2020
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

export default NootPrev;
