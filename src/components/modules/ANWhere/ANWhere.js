import React, { Component } from "react";

// style
import "../../../utilities.css";

// images
import cover from "../../../../public/where.jpg";

class ANWhere extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(<>
			<div className="Album-cover-container">
				<img className="Album-full" src={cover} />
			</div>
			<div className="Prev-title">
				<div className="Album-artist u-center">Anthony Nardomarino</div>
				<div className="u-center">Where to Begin</div>
				<div className="Album-year u-center">(2020)</div>
			</div>
			<div className="track">
				<div className="track-num">1.</div>
				<div className="track-name">Liftoff</div>
			<iframe src="https://open.spotify.com/embed/track/2ejwOiLHlyNm9UaNfmEyML" 
				width="800" height="80" frameborder="0" allowtransparency="true" 
				allow="encrypted-media">
			</iframe>
			</div>
			<div className="track">
				<div className="track-num">2.</div>
				<div className="track-name">What Next (Where to Begin, pt.1)</div>
			<iframe src="https://open.spotify.com/embed/track/1cW5uCU0BIu4Bvqtln3gpr" 
				width="800" height="80" frameborder="0" allowtransparency="true" 
				allow="encrypted-media">
			</iframe>
			</div>
			<div className="track">
				<div className="track-num">3.</div>
				<div className="track-name">Time (Where to Begin, pt.2)</div>
			<iframe src="https://open.spotify.com/embed/track/0zHdjAT9eWywe2yaSv2O7S" 
				width="800" height="80" frameborder="0" allowtransparency="true" 
				allow="encrypted-media">
			</iframe>
			</div>
			<div className="track">
				<div className="track-num">4.</div>
				<div className="track-name">Flowers in the Wall</div>
			<iframe src="https://open.spotify.com/embed/track/2P4pohXq3rHv9HA0LrV3rE" 
				width="800" height="80" frameborder="0" allowtransparency="true" 
				allow="encrypted-media">
			</iframe>
			</div>
			<div className="track">
				<div className="track-num">5.</div>
				<div className="track-name">French Press</div>
			<iframe src="https://open.spotify.com/embed/track/6tCRJhhYKgrUCZ9i4gveaX" 
				width="800" height="80" frameborder="0" allowtransparency="true" 
				allow="encrypted-media">
			</iframe>
			</div>
			<div className="track">
				<div className="track-num">6.</div>
				<div className="track-name">Chatter</div>
			<iframe src="https://open.spotify.com/embed/track/5XbuKUGwQL7WPs1Db539BX" 
				width="800" height="80" frameborder="0" allowtransparency="true" 
				allow="encrypted-media">
			</iframe>
			</div>
			<div className="track">
				<div className="track-num">7.</div>
				<div className="track-name">Fangorn</div>
			<iframe src="https://open.spotify.com/embed/track/2Daj2uz4cwqFLFIaSNbNP7" 
				width="800" height="80" frameborder="0" allowtransparency="true" 
				allow="encrypted-media">
			</iframe>
			</div>
		</>);
	}
}

export default ANWhere;
