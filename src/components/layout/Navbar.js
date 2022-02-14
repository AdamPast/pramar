import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";


class Navbar extends Component{
	scrollToTop = () => {
		scroll.scrollToTop({duration: 100}); 
	}

	render(){
		
		return (
			
			<nav className="nav">			
				<h1 className="visuallyhidden">Nawigacja</h1>
				
				<img src='logo-kolor.svg' alt="Logo (pasek nawigacyjny)" className="logo--nav" onClick={this.scrollToTop}/>
				  <ul>
				  <li className="item">
					<Link
    				activeClass="active"
    				to="about-us"
    				spy={true}
    				smooth={true}
    				offset={-110}
    				duration={100}
					>O nas </Link>	 
					</li>
					<li className="item">
					<Link
    				activeClass="active"
    				to="services"
    				spy={true}
    				smooth={true}
    				offset={-110}
    				duration={100}
					>Nasze usługi </Link>	 
					</li>
					<li className="item">
					<Link
    				activeClass="active"
    				to="contact"
    				spy={true}
    				smooth={true}
    				offset={-110}
    				duration={100}
					>Kontakt </Link>	 
					</li>
				  </ul>
			</nav>
		)
	}
   
}

export default Navbar
