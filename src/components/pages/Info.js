import React, { Component } from "react";
import { Router } from "@reach/router";

// modules
import Me from "../modules/Me";

//style
import "./Info.css";

// images

class Info extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(<>
			<div className="Page-container">
			<div className="Page-title u-fadein">
			info.
			</div>
			<Me />
			</div>
		</>);
	}

}

export default Info;
