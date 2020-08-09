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
	"The Mandelbrot Explorer is a program that allows a user to 	\
	 generate a high-resolution image of a particular coordinate in \
	 a plotted Mandelbrot Fractal. It takes the two axes of the image\
	 to be the real and imaginary coordinates of inputs to the 	\
	 Mandelbrot series, plotting a color at that point corresponding\
	 to convergence rate, using black to signify a lack of 		\
	 convergence according to a specified resolution.";

const DESC2 =
	"Other features of the program include the generation of Julia	\
	 fractals, or circular substructures of the Mandelbrot fractal.";

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

export default FractalPrev;
