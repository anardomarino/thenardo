import React, { Component } from "react";
import { Router } from "@reach/router";

//style
import "./Games.css";

// images

class Games extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(<>
			<div className="Page-container">
			<div className="Page-title u-fadein">
			games.
			</div>
			I don't play games.
			</div>
		</>);
	}

}

export default Games;
