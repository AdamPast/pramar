import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav">
			<h1 className="visuallyhidden">Nawigacja</h1>
    		<img src='logo.png' alt="Logo (pasek nawigacyjny)" className="logo--nav"/>
  			<ul>
    			<li className="item"><a href="#about-us">O nas</a></li>
    			<li className="item"><a href="#services">Nasze usługi</a></li>
    			<li className="item"><a href="#contact">Kontakt</a></li>
  			</ul>
		</nav>
    )
}

export default Navbar
