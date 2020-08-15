import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "./Art.css";

// img
import image from "../../../public/ly.jpg";

class LyreArt extends Component {
	constructor(props){
		super(props);
	}

	render(){return(<>
		<img className="Piece-unsel" src={image} />
	</>);}
}

export default LyreArt;
