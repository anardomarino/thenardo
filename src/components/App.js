import React, { Component } from "react";
import { Route } from "react-router-dom";
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
import MusicChoose from "./modules/MusicChoose";
import ProjectChoose from "./modules/ProjectChoose";

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
				<ProjectChoose	path="/projects/:choose" />
				<Music		path="/music" />
				<MusicChoose	path="/music/:choose" />
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
