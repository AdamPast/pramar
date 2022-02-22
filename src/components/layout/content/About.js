import React from 'react'

const About = () => {
    return (
        <div className="section--container">
			<section className="section" id="about-us">
				<h2>O nas</h2>
				<div className="section--content">
					<div className="content--text">
						<p><strong className="highlight">Pramar</strong> jest świeżynką na rynku, ale doświadczenie w naprawie samochodów ciężarowych mamy niemal <strong className="highlight">10</strong> letnie! 
							Oferujemy usługi w zakresie serwisu samochodów ciężarowych, dostawczych, autobusów, koparek, traktorów, maszyn rolniczych, a nawet samochodów specjalnych.	
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
						<p>Posiadamy również <strong className="highlight">profesjonalny</strong> sprzęt do wulkanizacji opon w samochodach ciężarowych, dzięki czemu szybko radzimy sobie z wymianą opon lub, jeśli jest to możliwe, naprawą. 
							Sezonowo dokonujemy również przeglądu oraz serwisu <strong className="highlight">klimatyzacji</strong>.
						</p>
					</div>	
				</div>
				
			</section>
		</div>
    )
}

export default About
