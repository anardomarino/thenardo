import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../../utilities.css";
import "../Project.css";
import "./Theramin.css";

// imgs
import demo from "../../../../public/theramin2.jpg";

// macros
const LINK = "/projects/theramin";
const SKILLS = ["C","Analog Filter Design","Digital Signal Processing","Python",
		"Human-Computer Interfacing","OOP","SoC System Design"];

const DESC1 = 
	"The “Programmable Synthesizer on a Chip” is a system that will allow a user to interact with a light-\
photoresistor system with a user-friendly interface for selecting sounds and outputting them to a\
 speaker. It involves the ease of manipulating sine wave harmonic structures, as well as manipulating\
 the pitch and amplitude of a number of preset sound waves, including square waves, sawtooth waves,\
 and a preset guitar harmonic structure.";

const DESC2 = 
	"The harmonic structure of any instrument is made up of sine waves of different frequencies and \
amplitudes: the “timbre”, as referred to by musicians, is the interaction of these harmonics and the \
formation of a recognizable sound that we can easily associate with a particular instrument. By \
allowing the musician to directly interface with sine wave harmonics, the synthesizer offers an \
informative approach to recognizing the harmonics' effects on the overall tone of an instrument, and \
allowing them to create their own tone based on their preferences. The Programmable Synth on a Chip \
offers the ability to manipulate three harmonics not including the first harmonic, with coefficients \
ranging from zero to eight, where eight is the equivalent coefficient to the tone's fundamental \
frequency. In this way, there are 729 unique tones that are producible by the Programmable Synth on a \
Chip, not including the preset tones outside of the sine wave manipulation mode.";

const DESC3 =
	"";

class Theramin extends Component {

	render(){return(<>
		<div className="Project-main-container">
			<iframe width="800" height="500" className="Theramin-video"
				src="https://www.youtube.com/embed/PdGxAZ0wZII" 
				frameborder="0" allow="accelerometer; autoplay; encrypted-media" allowfullscreen>
			</iframe>
			<div className="Theramin-title">
			Programmable Synthesizer on a Chip
			</div>
			<div className="Project-main-body">
				<div className="Project-main-body-text">
				<div className="Project-body-text">{DESC1}</div>
				<div className="Project-body-text">{DESC2}</div>
				<div className="Project-body-text">{DESC3}</div>
				</div>
				<div className="Theramin-body-image-container">
				<img className="Theramin-body-image" src={demo} />
				</div>
			</div>
			<div className="Project-subdiv-title">
			tools.
			</div>
			<div className="Previews-container">
			{SKILLS
				.map((skill)=>{
					return(<div className="Project-skill">
						{skill}
					</div>)})}
			</div>
		</div>
	</>);}
}

export default Theramin;
