import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../utilities.css";
import "./Project.css";

// imgs
import fract from "../../../public/fract.jpg";

// macros
const LINK = "/projects/fractal";
const DESC1 =
	"The Mandelbrot Explorer is a program that ";

class FractalPrev extends Component {
	render(){return(<>
		<div className="Project-container">
			<img className="Thumbnail" src={fract} />
			<div className="Project-body">
				<Link to={LINK}
					className="Project-title">
				mandelbrot explorer.
				</Link>
				<div className="Project-date">
				spring 2020
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

export default FractalPrev;
