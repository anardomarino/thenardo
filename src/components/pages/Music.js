import React, { Component } from "react";
import { Router } from "@reach/router";

// components
import SponchSteamyPrev from "../modules/SponchSteamyPrev";
import ANWherePrev from "../modules/ANWherePrev";
import CUPItIsWhatPrev from "../modules/CUPItIsWhatPrev";

//style
import "../../utilities.css";

// images

class Music extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(<>
			<div className="Page-title u-fadein">
			music.
			</div>
			<div className="Previews-container">
				<ANWherePrev />
				<SponchSteamyPrev />
				<CUPItIsWhatPrev />
			</div>
		</>);
	}

}

export default Music;
