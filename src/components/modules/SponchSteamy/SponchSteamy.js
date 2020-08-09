import React, { Component } from "react";

// style
import "../../../utilities.css";

// images
import cover from "../../../../public/steamy.jpg";

class SponchSteamy extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(<>
			<div className="Album-cover-container">
				<img className="Album-full" src={cover} />
			</div>	
			<div className="Prev-title">
				<div className="Album-artist u-center">Sponch</div>
				<div className="u-center">Careful, it's Steamy</div>
				<div className="Album-year u-center">(2019)</div>
			</div>
			<div className="track">
				<div className="track-num">1.</div>
				<div className="track-name">Hammy</div>
			<iframe src="https://open.spotify.com/embed/track/3X0U5knnVw0sNny3uSFp1V" 
				width="800" height="80" frameborder="0" allowtransparency="true" 
				allow="encrypted-media">
			</iframe>
			</div>
			<div className="track">
				<div className="track-num">2.</div>
				<div className="track-name">Head</div>
			<iframe src="https://open.spotify.com/embed/track/5ZzsrSb7wv7DhRDtEoRkxk" 
				width="800" height="80" frameborder="0" allowtransparency="true" 
				allow="encrypted-media">
			</iframe>
			</div>
			<div className="track">
				<div className="track-num">3.</div>
				<div className="track-name">(Hidden Track) Hernia Homophony</div>
			<iframe src="https://open.spotify.com/embed/track/1dRThJfg29XMsLQRj6bIO5" 
				width="800" height="80" frameborder="0" allowtransparency="true" 
				allow="encrypted-media">
			</iframe>
			</div>
		</>);
	}
}

export default SponchSteamy;
