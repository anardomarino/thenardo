import React, { Component } from "react";
import { Router } from "@reach/router";
import NavBar from "./modules/NavBar";
import Footer from "./modules/Footer";

// pages
import Landing from "./pages/Landing";
import Info from "./pages/Info";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Music from "./pages/Music";
import Games from "./pages/Games";
import Art from "./pages/Art";
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
				<Landing 	path="/" />
				<Info		path="/info" />
				<About	 	path="/about" />
				<Projects	path="/projects" />
				<Music		path="/music" />
				<Games		path="/games" />
				<Art		path="/art" />
				<NotFound default />
			</Router>
			</div>
			<Footer />
		</div>
		</>);
	}
}


export default App;
