import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "./Art.css";

// img
import image from "../../../public/guitar2.jpg";

class GuitarArt extends Component {
	constructor(props){
		super(props);
	}

	render(){return(<>
		<img className="Piece-unsel" src={image} />
	</>);}
}

export default GuitarArt;
