import React from "react";

import "./styles/Projects.css";

function Projects() {
	return (
		<main id="my-work">
			<h2>My Work</h2>
			<section id="card">
				<div className="flex-box">
					<div className="click-link">
						<img
							id="large-image"
							src="./assets/images/dell-ff11JzQk690-unsplash.jpg"
							alt="laptop and notebook on a bench outside"
						/>
						<a target="blank" href="https://kelseyra.github.io/contact-page/">
							<h3>Sample Contact Page</h3>
						</a>
					</div>
				</div>
				<div className="images flex-box">
					<div class="click-link">
						<img
							className="project-images"
							src="./assets/images/dell-LXI5kqCdEcE-unsplash.jpg"
							alt="laptop"
						/>
						<a
							target="blank"
							href="https://kelseyra.github.io/horiseon-refactor-accessibility/"
						>
							<h3>Horiseon Refactor</h3>
						</a>
					</div>
					<div className="click-link">
						<img
							className="project-images"
							src="./assets/images/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg"
							alt="glasses"
						/>
						<a
							target="blank"
							href="https://kelseyra.github.io/prework-study-guide/"
						>
							<h3>Prework Study-guide</h3>
						</a>
					</div>
					<div className="click-link">
						<img
							className="project-images"
							src="./assets/images/markus-spiske-Skf7HxARcoc-unsplash.jpg"
							alt="code"
						/>
						<a target="blank" href="https://kelseyra.github.io/movie-battle/">
							<h3>Movie Battle</h3>
						</a>
					</div>
					<div className="click-link">
						<img
							className="project-images"
							src="./assets/images/christin-hume-Hcfwew744z4-unsplash.jpg"
							alt="person working on laptop"
						/>
						<a target="blank" href="https://grey-stones.herokuapp.com/">
							<h3>NeoPlants</h3>
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Projects;
