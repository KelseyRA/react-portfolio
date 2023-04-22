import React from "react";

import './styles/Header.css'

function Header() {
	return (
        <header>
        <ul>
            <li>
                <a href="#contact-me">Contact Me</a>
            </li>
            <li>
                <a href="#my-work">My Work</a>
            </li>
            <li>
                <a href="#about-me">About Me</a>
            </li>
        </ul>
        <h1>Kelsey Alderman</h1>
    </header>
	);
}

export default Header;
