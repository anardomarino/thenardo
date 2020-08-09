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
	"The Autonomous Taxi Health Monitor is a system developed for the \
	 MIT Momentum product development competition for General Motors. \
	 It addresses a concern for passengers and public safety officials\
	 produced by the concept of the eventuality of autonomous taxi  \
	 services.";

const DESC2 =
	"Designed, reviewed, built, tested, and implemented in a course of\
	 two weeks, the Health Monitor tracks the presence of a passenger \
	 in the absence of a driver, and ensures that they are responsive \
	 during and at the conclusion of the ride.";

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

export default TaxiPrev;
