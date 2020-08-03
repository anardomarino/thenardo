import React, { Component } from "react";
import { Link } from "@reach/router";

// style
import "../../utilities.css";
import "./News.css";

class News extends Component {
	constructor(props){
		super(props);
	}

	render(){return(<>
		<div className="News-container">
			<div className="News-headline">
				about me.
			</div>
			<div className="Button-to">
			<Link to="/info" className="News-link">
				find out more.	
			</Link>
			</div>
		</div>
	</>);}
}

export default News;
