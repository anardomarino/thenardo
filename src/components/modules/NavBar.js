import React, { Component } from "react";

// style
import "./NavBar.css";
import "../../utilities.css";

class NavBar extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(<>
		<div className="NavBar-container">
			<div className="NavBar-title">
			anthony nardomarino.
			</div>
		</div>
		</>);
	}
}

export default NavBar;
