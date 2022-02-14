import React from 'react'

const About = () => {
    return (
        <div className="section--container">
			<section className="section" id="about-us">
				<h2>O nas</h2>
				<div className="section--content">
					<div className="content--text">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. <span className="highlight">Duis aute irure dolor in reprehenderit in voluptate velit</span> esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>

					<div className="content--image right">
						<img src="photo1.jpg" alt="zdjecie"/>
					</div>
				</div>

				<div className="section--content">
					<div className="content--image left">
						<img src="photo2.jpg" alt="zdjecia" />
					</div>

					<div className="content--text">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor <span className="highlight">incididunt ut labore et dolore magna aliqua</span>. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>	
				</div>
				
			</section>
		</div>
    )
}

export default About
