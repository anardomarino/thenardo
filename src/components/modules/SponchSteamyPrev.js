import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "./Music.css";
import "../../utilities.css";

// imgs
import steamy from "../../../public/steamy.jpg";

class SponchSteamyPrev extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(<>
		<div className="Prev-container u-fadein">
			<Link to="/music/carefulitssteamy" className="Album-cover-container">
				<img className="Album-cover" src={steamy} />
			</Link>
			<Link to="/music/carefulitssteamy" className="Prev-title">
				<div className="u-center">Sponch</div>
				<div className="u-center">Careful, it's Steamy</div>
				<div className="u-center">(2019)</div>
			</Link>
		</div>
		</>);
	}
}

export default SponchSteamyPrev;
