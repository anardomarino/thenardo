import React, { Component } from "react";
import { Link } from "@reach/router";

import "./Footer.css";

// links
const EMAIL	= "mailto:anthonyn@mit.edu";
const SPOTIFY 	= "https://open.spotify.com/artist/7k6bdTGFNo1R1YfqVUoJ2V";
const INSTAGRAM	= "https://instagram.com/astring";
const LINKEDIN	= "https://www.linkedin.com/in/anthony-nardomarino/";
const GITHUB	= "https://github.com/anardomarino/";

class Footer extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(<>
			<div className="Footer-container">
				<div className="Footer-links">
				<a className="Footer-title underline" href={EMAIL}
				   target="_blank">
				anthonyn@mit.edu
				</a>
				<a className="Footer-title underline" href={INSTAGRAM}
				   target="_blank">
				instagram.
				</a>
				<a className="Footer-title underline" href={SPOTIFY}
				   target="_blank">
				spotify.
				</a>
				<a className="Footer-title underline" href={LINKEDIN}
				   target="_blank">
				linkedin.
				</a>
				<a className="Footer-title underline" href={GITHUB}
				   target="_blank">
				github.
				</a>
				</div>
			</div>
		</>);
	}
}

export default Footer;
