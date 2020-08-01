import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "./Music.css";
import "../../utilities.css";

// imgs
import where from "../../../public/where.jpg";

class SponchSteamyPrev extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(<>
		<div className="Prev-container u-fadein">
			<Link to="/music/wheretobegin" className="Album-cover-container">
				<img className="Album-cover" src={where} />
			</Link>
			<Link to="/music/wheretobegin" className="Prev-title">
				<div className="u-center">Anthony Nardomarino</div>
				<div className="u-center">Where to Begin</div>
				<div className="u-center">(2020)</div>
			</Link>
		</div>
		</>);
	}
}

export default SponchSteamyPrev;
