import React, { Component } from "react";
import { Router } from "@reach/router";

//style
import "./Landing.css";

// images
import montan from "../../../public/montan.png";

class Landing extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(<>
			<img className="Landing-background"
			     src={montan} />
			x
		</>);
	}

}

export default Landing;
