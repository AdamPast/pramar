import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav">
			<h1 className="visuallyhidden">Nawigacja</h1>
    		<img src='logo.png' alt="Logo (pasek nawigacyjny)" className="logo--nav"/>
  			<ul>
    			<li className="item"><button onClick={() => window.scrollTo(0, 580)}>O nas</button> </li>
				
    			<li className="item"><button onClick={() => window.scrollTo(0, 1430)}>Nasze usługi</button> </li>
    			<li className="item"><button onClick={() => window.scrollTo(0, 1940)}>Kontakt</button></li>
  			</ul>
		</nav>
    )
}

export default Navbar
