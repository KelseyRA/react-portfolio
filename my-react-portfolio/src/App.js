import React from "react";
import Header from "./Header";
import Bio from "./Bio";
import Projects from "./Projects";
import Footer from "./Footer";
import Form from "./Form";
import "./styles/App.css";

function App() {
	return (
		<div>
			<Header />
			<Bio />
			<Projects />
			<Form />
			<Footer />
		</div>
	);
}

export default App;
