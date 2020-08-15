import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../../utilities.css";
import "../Project.css";

// imgs
import piano from "../../../../public/fpga.png";

// macros
const LINK = "/projects/fpgapiano";
const DESC1 =
	"The FPGA Piano Playing Robot is capable of listening to live \
	 music and perform a real-time Fourier Transform to determine \
	 which notes were played, with two six-fingered robotic hands \
	 able to replicate what it heard on an actual keyboard.";

const DESC2 =
	"The system is constructed from 3D-Printed PLA robotic hand   \
	 structures to hold six mini-servo motors each, actuating     \
	 laser-cut acryllic fingers of variable lengths.";

class FPGAPianoPrev extends Component {
	render(){return(<>
		<div className="Project-container">
			<img className="Thumbnail" src={piano} />
			<div className="Project-body">
				<Link to={LINK}
					className="Project-title">
				FPGA piano playing robot.
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

export default FPGAPianoPrev;
