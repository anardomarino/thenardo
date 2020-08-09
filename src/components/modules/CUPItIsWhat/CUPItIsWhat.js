import React, { Component } from "react";

// style
import "../../../utilities.css";

// images
import cover from "../../../../public/itiswhat.jpg";

class CUPItIsWhat extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(<>
			<div className="Album-cover-container">
				<img className="Album-full" src={cover} />
			</div>
			<div className="Prev-title">
				<div className="Album-artist u-center">Contentz Under Pressure</div>
				<div className="u-center">it is what it is</div>
				<div className="Album-year u-center">(2017)</div>
			</div>
			<div className="track">
				<div className="track-num">1.</div>
				<div className="track-name">Star Spangled Banner</div>
			<iframe width="560" height="40" src="https://www.youtube.com/embed/BaW1l68L5T0" 
				frameborder="0" allow="encrypted-media">
			</iframe>
			</div>
			<div className="track">
				<div className="track-num">2.</div>
				<div className="track-name">Embrace</div>
			<iframe width="560" height="40" src="https://www.youtube.com/embed/CIJ2QOL8RqU" 
				frameborder="0" allow="encrypted-media">
			</iframe>
			</div>
			<div className="track">
				<div className="track-num">3.</div>
				<div className="track-name">Movin' On</div>
			<iframe width="560" height="40" src="https://www.youtube.com/embed/t0KmefNejmo" 
				frameborder="0" allow="encrypted-media">
			</iframe>
			</div>
			<div className="track">
				<div className="track-num">4.</div>
				<div className="track-name">Fuel Our Fires</div>
			<iframe width="560" height="40" src="https://www.youtube.com/embed/cjkSr4TjXg4" 
				frameborder="0" allow="encrypted-media">
			</iframe>
			</div>
			<div className="track">
				<div className="track-num">5.</div>
				<div className="track-name">Empty</div>
			<iframe width="560" height="40" src="https://www.youtube.com/embed/ppPmFOtBggc" 
				frameborder="0" allow="encrypted-media">
			</iframe>
			</div>
			<div className="track">
				<div className="track-num">6.</div>
				<div className="track-name">Moment of Silence</div>
			<iframe width="560" height="40" src="https://www.youtube.com/embed/QKZhnBeGqOE" 
				frameborder="0" allow="encrypted-media">
			</iframe>
			</div>
			<div className="track">
				<div className="track-num">7.</div>
				<div className="track-name">Above (ft. Clare Medina)</div>
			<iframe width="560" height="40" src="https://www.youtube.com/embed/Z2mGpXO0_Ww" 
				frameborder="0" allow="encrypted-media">
			</iframe>
			</div>
			<div className="track">
				<div className="track-num">8.</div>
				<div className="track-name">Liftoff</div>
			<iframe width="560" height="40" src="https://www.youtube.com/embed/qKKNqfuqXs4" 
				frameborder="0" allow="encrypted-media">
			</iframe>
			</div>
			<div className="track">
				<div className="track-num">9.</div>
				<div className="track-name">Not Just Survive</div>
			<iframe width="560" height="40" src="https://www.youtube.com/embed/e2uWFA77Yuk" 
				frameborder="0" allow="encrypted-media">
			</iframe>
			</div>
			<div className="track">
				<div className="track-num">10.</div>
				<div className="track-name">Don't Wait for Gravity</div>
			<iframe width="560" height="40" src="https://www.youtube.com/embed/4TW8rDBQrC0" 
				frameborder="0" allow="encrypted-media">
			</iframe>
			</div>
		</>);
	}
}

export default CUPItIsWhat;
