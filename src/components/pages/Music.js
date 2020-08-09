import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Router } from "@reach/router";

// ******* components
//
// previews
import MusicPrev from "../modules/MusicPrev";

//style
import "../../utilities.css";

// images

class Music extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(<>
			<MusicPrev />
		</>);
	}

}

export default Music;
