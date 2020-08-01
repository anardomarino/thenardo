import React, { Component } from "react";
import { Link } from "@reach/router";

import "./Footer.css";

// links
const EMAIL	= "mailto:anthonyn@mit.edu";
const SPOTIFY 	= "https://open.spotify.com/artist/7k6bdTGFNo1R1YfqVUoJ2V";
const INSTAGRAM	= "https://instagram.com/astring";
const LINKEDIN	= "https://www.linkedin.com/in/anthony-nardomarino/";

class Footer extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(<>
			<div className="Footer-container">
				<a className="Footer-title" href={EMAIL}
				   target="_blank">
				anthonyn@mit.edu
				</a>
				<a className="Footer-title" href={INSTAGRAM}
				   target="_blank">
				instagram.
				</a>
				<a className="Footer-title" href={SPOTIFY}
				   target="_blank">
				spotify.
				</a>
				<a className="Footer-title" href={LINKEDIN}
				   target="_blank">
				linkedin.
				</a>
			</div>
		</>);
	}
}

export default Footer;
