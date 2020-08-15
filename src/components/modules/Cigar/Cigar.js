import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../../utilities.css";
import "../Project.css";

// imgs
import nail from "../../../../public/cigar.jpg";

// macros
const LINK = "/projects/cigar";
const DESC1 =
	"The Cigar-Box Guitar was my final demonstration of acoustic physics \
	 during AP Physics I. In order to demonstrate the relationship between\
	 string tension and pitch, body-type and resonance, I combined my  \
 	 love for music and my interest in acoustic physics to make a guitar \
	 out of an old cigar box.";

const DESC2 =
	"Components were found from around the house, and include objects like\
	 a cabinet hinge with Lego Funnel pieces to position the strings, a  \
	 glass vial for the bridge, and coathangar pieces for frets. \
	 The final presentation included the performance of an originally \
	 composed song in front of the class.";
	 

class Cigar extends Component {
	render(){return(<>
		<div className="Project-container">
			<img className="Thumbnail" src={nail} />
			<div className="Project-body">
				<Link to={LINK}
					className="Project-title">
				cigar-box guitar.
				</Link>
				<div className="Project-date">
				spring 2017
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

export default Cigar;
