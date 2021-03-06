import React, { Component } from "react";
import { Router } from "@reach/router";

// Pieces
import MountainDragon from  "../modules/MountainDragon";
import GuitarArt from  "../modules/GuitarArt";
import LyreArt from "../modules/LyreArt";

// style
import "../../utilities.css";

// images

class Art extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(<>
			<div className="Page-title u-fadein">
			art.
			</div>
			<div className="Previews-container">
				<MountainDragon />
				<GuitarArt />
				<LyreArt />
			</div>
		</>);
	}

}

export default Art;
