import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
			<div className="socials">
				<a href="#"><i className="fab fa-facebook fa-lg"></i></a>
				<a href="#"><i className="fab fa-instagram fa-lg"></i></a>
				<a href="#"><i className="fab fa-twitter fa-lg"></i></a>
			</div>

			<div onClick={()=> window.scrollTo(0,0)} id="arrow-up"><i className="fas fa-arrow-up fa-lg"></i></div>
			<p><strong>&copy; PRAMAR, 2022</strong></p>
		</footer>
    )
}

export default Footer
