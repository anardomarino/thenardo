import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "./Music.css";
import "../../utilities.css";

// imgs
import itiswhat from "../../../public/itiswhat.jpg";

class CUPItIsWhatPrev extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(<>
		<div className="Prev-container u-fadein">
			<Link to="/music/itiswhatitis" className="Album-cover-container">
				<img className="Album-cover" src={itiswhat} />
			</Link>
			<Link to="/music/itiswhatitis" className="Prev-title">
				<div className="u-center">Contentz Under Pressure</div>
				<div className="u-center">it is what it is</div>
				<div className="u-center">(2017)</div>
			</Link>
		</div>
		</>);
	}
}

export default CUPItIsWhatPrev;
