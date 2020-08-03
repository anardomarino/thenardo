import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../utilities.css";
import "./Project.css";

// imgs
import taxi from "../../../public/taxi.png";

// macros
const LINK = "/projects/taxi";
const DESC1 =
	"";

class TaxiPrev extends Component {
	render(){return(<>
		<div className="Project-container">
			<img className="Thumbnail" src={taxi} />
			<div className="Project-body">
				<Link to={LINK}
					className="Project-title">
				autonomous taxi health monitor.
				</Link>
				<div className="Project-date">
				winter 2019
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

export default TaxiPrev;
