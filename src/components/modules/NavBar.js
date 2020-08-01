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
			<div className="NavBar-items-container">
				<div className="NavBar-item">
					item1
				</div>
				<div className="NavBar-item">
					item2
				</div>
			</div>
		</div>
		</>);
	}
}

export default NavBar;
