import React, { Component } from "react";
import { Link } from "@reach/router";

// components
import SponchSteamyPrev from "../modules/SponchSteamyPrev";
import ANWherePrev from "../modules/ANWherePrev";
import CUPItIsWhatPrev from "../modules/CUPItIsWhatPrev";
import NotFound from "../pages/NotFound";

// style
import "../../utilities.css";

class MusicPrev extends Component { 
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

export default MusicPrev;
