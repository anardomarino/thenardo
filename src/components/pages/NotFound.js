import React, { Component } from "react";
import { Router } from "@reach/router";

class NotFound extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(<>
			<div className="u-fadein">
				Page not found :/
			</div>
		</>);
	}

}

export default NotFound;
