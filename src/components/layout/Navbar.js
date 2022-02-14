import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav">
			<h1 className="visuallyhidden">Nawigacja</h1>
    		<img src='logo-kolor.svg' alt="Logo (pasek nawigacyjny)" className="logo--nav"/>
  			<ul>
    			<li className="item"><button onClick={() => window.scrollTo(0, 1050)}>O nas</button> </li>	
    			<li className="item"><button onClick={() => window.scrollTo(0, 1880)}>Nasze usługi</button> </li>
    			<li className="item"><button onClick={() => window.scrollTo(0, 2400)}>Kontakt</button></li>
  			</ul>
		</nav>
    )
}

export default Navbar
