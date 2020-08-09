import React, { Component } from "react";

// pages
import ANWhere from "./ANWhere/ANWhere";
import SponchSteamy from "./SponchSteamy/SponchSteamy";
import CUPItIsWhat from "./CUPItIsWhat/CUPItIsWhat";

class MusicChoose extends Component {
	guide = {
		"wheretobegin": <ANWhere/>,
		"carefulitssteamy": <SponchSteamy />,
		"itiswhatitis": <CUPItIsWhat />,
	}

	constructor(props){
		super(props);
	}

	render(){
		const point = this.props.choose;
		return(<>
			{this.guide[point]}
		</>);
	}
}

export default MusicChoose;
