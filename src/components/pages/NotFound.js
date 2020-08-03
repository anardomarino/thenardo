import React, { Component } from "react";
import { Router } from "@reach/router";

class NotFound extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(<>
			<div className="Page-container u-fadein">
				404, Page not found :/
			</div>
		</>);
	}

}

export default NotFound;
