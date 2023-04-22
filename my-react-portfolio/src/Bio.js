import React from "react";
import headshot from './images/headshot.jpg';
import "./styles/Bio.css";

function Bio() {
	return (
		<section id="about-me" className="content">
			<h2>About Me</h2>
			<img src={headshot} alt="headshot of Kelsey" />
			<p>
				Hello, my name is Kelsey and I am a fullstack web developer from
				Philadelphia, PA. I am currently enrolled in the UPenn Fullstack Coding
				Bootcamp. I have a background in social services and have worked in the
				nonprofit sector for over 9 years. I am excited to be able to utilize my
				new skills to support nonprofits in a different capacity. Please take a
				look at my work below.
			</p>
		</section>
	);
}

export default Bio;
