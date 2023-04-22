import React from "react";

import './styles/Footer.css';

function Footer() {
	return (
		<footer id="contact-me">
			<h2>Contact Me</h2>
			<ul>
				<li>Phone: 607-342-1321</li>
				<a
					target="blank"
					href="mailto:kra7888@gmail.com"
					subject="Tell me more about your portfolio"
				>
					<li>Email: kra7888@gmail.com</li>
				</a>
				<a
					target="blank"
					href="https://www.linkedin.com/in/kelsey-alderman-099614150/"
				>
					<li>LinkedIn</li>
				</a>
			</ul>
		</footer>
	);
}

export default Footer;
