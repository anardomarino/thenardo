import React, { Component } from "react";

// style
import "./Me.css";
import "../../utilities.css";

// img
import pic from "../../../public/me.jpg";
const SPACE = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1432468943l/70535._SY475_.jpg";
const SPACE_L = "https://www.barnesandnoble.com/w/2001-arthur-c-clarke/1101956512";
const LOTR = "https://prodimage.images-bn.com/pimages/9780544273443_p0_v2_s1200x630.jpg";
const LOTR_L = "https://www.barnesandnoble.com/w/the-lord-of-the-rings-deluxe-edition-jrr-tolkien/1115479497?ean=9780544273443";
const HOBBIT = "https://i.pinimg.com/originals/4f/bf/62/4fbf62e64a7f63c8a01ea257fea405dc.jpg";
const HOBBIT_L = "https://www.barnesandnoble.com/w/hobbit-j-r-r-tolkien/1100068700?ean=9780547928227";
const CHILD = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320552628l/414999.jpg";
const CHILD_L = "https://www.barnesandnoble.com/w/childhoods-end-arthur-c-clarke/1100008028?ean=9780345347954";
const CONTACT = "https://i.pinimg.com/originals/ec/98/59/ec985950b743fb351066d9bdc0bb8735.jpg";
const CONTACT_L = "https://www.barnesandnoble.com/w/contact-carl-sagan/1103275769?ean=9781501197987";
const FRANK = "https://2.bp.blogspot.com/_cMdbfkl3Rz4/R7v-hjhOoeI/AAAAAAAABws/Od1EKUZN1eE/s800/AirmontFrankenstein.jpg";
const FRANK_L = "https://www.barnesandnoble.com/w/frankenstein-shelley-mary/1126911566?ean=9781435159624"
const CRIME = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1494307172l/35101197._SY475_.jpg";
const CRIME_L = "https://www.barnesandnoble.com/w/crime-and-punishment-fyodor-dostoevsky/1116756319?ean=9781593080815";
const FURY  = "https://images-na.ssl-images-amazon.com/images/I/91CTtO8eI8L.__BG0,0,0,0_FMpng_AC_UL600_SR390,600_.jpg";
const FURY_L = "https://www.barnesandnoble.com/w/sound-and-the-fury-william-faulkner/1000337118?ean=9780679732242";
const DRACULA  = "https://ih1.redbubble.net/image.1139423062.9197/flat,750x,075,f-pad,750x1000,f8f8f8.jpg";
const DRACULA_L = "https://www.barnesandnoble.com/w/barnes-noble-leatherbound-classics-dracula-bram-stoker/1106658799?ean=9781435159570";
const THINGS  = "https://images-na.ssl-images-amazon.com/images/I/31Y81iRzhbL._BO1,204,203,200_.jpg";
const THINGS_L = "https://www.barnesandnoble.com/w/pleasure-of-finding-things-out-richard-phillips-feynman/1102811398?ean=9780465023950";

// macros
const SUMMARY = 
	"I'm a Junior at Massachusetts Institute of Technology, studying Electrical 	\
	 Engineering & Computer Science (Course 6-2), concentrating in Artificial	\
	 Intelligence. My hobbies include playing guitar, cooking, and web development, \
	 as well as tinkering with different ideas in the realms of music technology, 	\
	 computer applications, and woodworking.";

class Me extends Component {
	constructor(props){
		super(props);
		this.state = {
			age: ((Date.now()-(new Date("2000-06-23")))/3600/24/1000/365),
		}
	}
	componentDidMount(){
		this.intervalID = setInterval(
			() => this.tick(),
			10
		);
	}
	componentWillUnmount(){
		clearInterval(this.intervalID);
	}
	tick(){
		this.getAge();
	}
	getAge(){
		const birth = new Date("2000-06-23");
		const SM = 60;
		const MH = 60;
		const HD = 24;
		const DY = 365;
		const MS = 1000;
		const EPSILON = 10000000000;
		this.setState({age: Math.round((Date.now() - birth)/MS/SM/MH/HD/DY*EPSILON)/EPSILON});
	}
	render(){

		return(<>
		<div className="Me-container">
			<div className="Me-head u-fadein">
				hey, i'm anthony.
			</div>
			<div className="Me-top-info-container">
			<div className="Me-pic-container">
				<img className="Me-pic" src={pic} />
			</div>
			<div className="Me-summary">
				{SUMMARY}
			</div>
			</div>
			<div className="subhead">stats.</div>
			<div className="pack-info">
			<table>
				<tr>	
					<td>age</td>
					<td>{this.state.age}</td>
				</tr>
				<tr>	
					<td>countries visited</td>
					<td>2</td>
				</tr>
				<tr>	
					<td>planets visited</td>
					<td>1</td>
				</tr>
				<tr>	
					<td>cups of coffee drank</td>
					<td>OverflowError</td>
				</tr>
			</table>
			<div className="Me-programming-container">
				<div className="bars">
					<div className="progress-label">
						<div className="progress-lang">python</div>
						<div className="progress-valu">80</div>
					</div>
					<div className="progress-outside">
					<div className="progress-python">
					</div>
					</div>
					<div className="progress-label">
						<div className="progress-lang">javascript</div>
						<div className="progress-valu">60</div>
					</div>
					<div className="progress-outside">
					<div className="progress-js">
					</div>
					</div>
					<div className="progress-label">
						<div className="progress-lang">c</div>
						<div className="progress-valu">60</div>
					</div>
					<div className="progress-outside">
					<div className="progress-c">
					</div>
					</div>
					<div className="progress-label">
						<div className="progress-lang">c++</div>
						<div className="progress-valu">40</div>
					</div>
					<div className="progress-outside">
					<div className="progress-cpp">
					</div>
					</div>
					<div className="progress-label">
						<div className="progress-lang">java</div>
						<div className="progress-valu">50</div>
					</div>
					<div className="progress-outside">
					<div className="progress-java">
					</div>
					</div>
					<div className="progress-label">
						<div className="progress-lang">html5</div>
						<div className="progress-valu">70</div>
					</div>
					<div className="progress-outside">
					<div className="progress-html">
					</div>
					</div>
					<div className="progress-label">
						<div className="progress-lang">css3</div>
						<div className="progress-valu">60</div>
					</div>
					<div className="progress-outside">
					<div className="progress-css">
					</div>
					</div>
					<div className="progress-label">
						<div className="progress-lang">bash/shell</div>
						<div className="progress-valu">50</div>
					</div>
					<div className="progress-outside">
					<div className="progress-bash">
					</div>
					</div>
			
				</div>
			</div>
			</div>
			<div className="subhead">
				favorite books.
			</div>
			<div className="books-container">
				<a href={SPACE_L} target="_blank">
				<img className="cover" src={SPACE}/>
				</a>
				<a href={LOTR_L} target="_blank">
				<img className="cover" src={LOTR}/>
				</a>
				<a href={HOBBIT_L} target="_blank">
				<img className="cover" src={HOBBIT}/>
				</a>
				<a href={CHILD_L} target="_blank">
				<img className="cover" src={CHILD}/>
				</a>
				<a href={CONTACT_L} target="_blank">
				<img className="cover" src={CONTACT}/>
				</a>
				<a href={FRANK_L} target="_blank">
				<img className="cover" src={FRANK}/>
				</a>
				<a href={CRIME_L} target="_blank">
				<img className="cover" src={CRIME}/>
				</a>
				<a href={FURY_L} target="_blank">
				<img className="cover" src={FURY}/>
				</a>
				<a href={DRACULA_L} target="_blank">
				<img className="cover" src={DRACULA}/>
				</a>
				<a href={THINGS_L} target="_blank">
				<img className="cover" src={THINGS}/>
				</a>
			</div>
		</div>
	</>);}
}

export default Me;
