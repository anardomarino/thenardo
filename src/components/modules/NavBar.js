import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "./NavBar.css";
import "../../utilities.css";

// images
import logo from "../../../public/VFX-1.png";

class NavBar extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(<>
		<nav className="NavBar-container">
			<Link to="/" className="NavBar-logo-container">
			<img className="NavBar-logo"
			     src={logo} />
			</Link>
			<Link to="/" className="NavBar-title">
			anthony nardomarino.
			</Link>
			<div className="NavBar-items-container">
				<Link to="/info" className="NavBar-item">
					info.
				</Link>
				<Link to="/projects" className="NavBar-item">
					projects.
				</Link>
				<Link to="/music" className="NavBar-item">
					music.
				</Link>
				<Link to="/games" className="NavBar-item">
					games.
				</Link>
			</div>
		</nav>
		</>);
	}
}

export default NavBar;
