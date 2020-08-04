import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "./Art.css";

// img
import image from "../../../public/montan.png";

class MountainDragon extends Component {
	constructor(props){
		super(props);
	}

	render(){return(<>
		<img className="Piece-unsel" src={image} />
	</>);}
}

export default MountainDragon;
