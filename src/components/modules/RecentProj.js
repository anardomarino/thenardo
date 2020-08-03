import React, { Component } from "react";
import { Link } from "@reach/router";

// Projects
import TheraminPrev from "./TheraminPrev";

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
			<TheraminPrev />
		</div>
	</>);}
}

export default RecentProj;
