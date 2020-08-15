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
			<div className="NavBar-capture">
			<Link to="/" className="NavBar-logo-container">
			<img className="NavBar-logo"
			     src={logo} />
			</Link>
			<Link to="/" className="NavBar-title">
			anthony nardomarino.
			</Link>
			<div className="NavBar-items-container">
				<div className="NavBar-item-container">
				<Link to="/info" className="NavBar-item underline">
					info.
				</Link>
				</div>
				<div className="NavBar-item-container">
				<Link to="/projects" className="NavBar-item underline">
					projects.
				</Link>
				</div>
				<div className="NavBar-item-container">
				<Link to="/music" className="NavBar-item underline">
					music.
				</Link>
				</div>
				<div className="NavBar-item-container">
				<Link to="/art" className="NavBar-item underline">
					art.
				</Link>
				</div>
			</div>
			</div>
		</nav>
		</>);
	}
}

export default NavBar;
