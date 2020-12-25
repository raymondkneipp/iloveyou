import { useState } from 'react';
import { ColorExtractor } from 'react-color-extractor'
import one from "../images/1.jpeg";
import two from "../images/2.jpeg";
import three from "../images/3.jpeg";
import four from "../images/4.jpeg";
import five from "../images/5.jpeg";
import six from "../images/6.jpeg";
import seven from "../images/7.jpeg";
import "./Timeline.css";

const Timeline = () => {
	
	const [oneColor, setOneColor] = useState("#e3e3e3");
	const [twoColor, setTwoColor] = useState("#e3e3e3");
	const [threeColor, setThreeColor] = useState("#e3e3e3");
	const [fourColor, setFourColor] = useState("#e3e3e3");
	const [fiveColor, setFiveColor] = useState("#e3e3e3");
	const [sixColor, setSixColor] = useState("#e3e3e3");
	const [sevenColor, setSevenColor] = useState("#e3e3e3");



	return (
		<div className="Timeline">
			<h1>Some of my favorite moments...</h1>

			<p>Our First Date 🥇</p>
			<ColorExtractor src={one} getColors={colors => setOneColor(colors)} />
			<div style={{backgroundColor: oneColor[1]}}>
				<img src={one} />
			</div>

			<p>First Time Shooting 🔫</p>
			<ColorExtractor src={two} getColors={colors => setTwoColor(colors)} />
			<div style={{backgroundColor: twoColor[1]}}>
				<img src={two} />
			</div>

			<p>Car Rides 🚙</p>
			<ColorExtractor src={three} getColors={colors => setThreeColor(colors)} />
			<div style={{backgroundColor: threeColor[1]}}>
				<img src={three} />
			</div>

			<p>Halloween 🎃</p>
			<ColorExtractor src={four} getColors={colors => setFourColor(colors)} />
			<div style={{backgroundColor: fourColor[1]}}>
				<img src={four} />
			</div>

			<p>My Dad's Wedding 💒</p>
			<ColorExtractor src={five} getColors={colors => setFiveColor(colors)} />
			<div style={{backgroundColor: fiveColor[1]}}>
				<img src={five} />
			</div>

			<p>Your 21st 🎉</p>
			<ColorExtractor src={six} getColors={colors => setSixColor(colors)} />
			<div style={{backgroundColor: sixColor[1]}}>
				<img src={six} />
			</div>

			<p>Zoo Trip 🦎</p>
			<ColorExtractor src={seven} getColors={colors => setSevenColor(colors)} />
			<div style={{backgroundColor: sevenColor[1]}}>
				<img src={seven} />
			</div>
		
		</div>
	);
}

export default Timeline;