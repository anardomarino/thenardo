import React, { Component } from "react";
import { Router } from "@reach/router";

//style
import "./Projects.css";
import "../../utilities.css";

// images

class Projects extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(<>
			<div className="Page-title u-fadein">
			projects.
			</div>
			<div className="Project">
				project1
			</div>
			<div className="Project">
				project2
			</div>
		</>);
	}

}

export default Projects;
