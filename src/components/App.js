import React, { Component } from "react";
import { Router } from "@reach/router";
import NavBar from "./modules/NavBar";

// pages
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";

// Style
import "./App.css";
import "../utilities.css";

class App extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(<>
		<div className="App-container">
			<NavBar />
			<div className="Page-container">
			<Router>
				<Landing path="/" />
				<NotFound default />
			</Router>
			</div>
		</div>
		</>);
	}
}


export default App;
