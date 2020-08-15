import React, { Component } from "react";
import { Link } from "@reach/router";

// Projects
import NootPrev from "./Noot/NootPrev";
import TheraminPrev from "./Theramin/TheraminPrev";

// style
import "../../utilities.css";
import "./News.css";

class RecentProj extends Component {
	constructor(props){
		super(props);
	}

	render(){return(<>
		<div className="News-container u-fadein">
			<div className="News-headline">
				most recent projects.
			</div>
			<div className="RP-Project">
			<NootPrev />
			</div>
			<div className="RP-Project">
			<TheraminPrev />
			</div>
		</div>
	</>);}
}

export default RecentProj;
