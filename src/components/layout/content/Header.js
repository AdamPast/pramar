import React from 'react'

const Header = () => {
    return (
        <>
        <img src="logo.png" className="only--mobile" alt="logo"/>
				<h1 className="visuallyhidden">Wprowadzenie</h1>
				<p className="main--description"><strong className="highlight">Problemy w trasie? Uszkodzona opona?</strong> <br/> Wystarczy jeden telefon, a poradzimy sobie z tym bez problemu! <br/> 
				Dojeżdżamy w każde <strong className="highlight">miejsce</strong> wskazane przez klienta, podejmując się naprawy bez konieczności <strong className="highlight">holowania</strong> samochodu do warsztatu.</p>
				<div className="main--items">
					<div className="main--item" id="localization">
						<i className="fas fa-map-marker-alt fa-2x"></i>
						<p className="main--info">Gdzie działamy?</p>
						<p className="main--info-value">Trasa Kaszubska</p>		
					</div>

					<div className="main--item">
						<i className="fas fa-phone-alt fa-2x"></i>
						<p className="main--info">Kontakt</p>
						<p className="main--info-value">501 820 881</p>		
					</div>

					<div className="main--item">
						<i className="fa-solid fa-envelope fa-2x"></i>
						<p className="main--info">Kontakt</p>
						<p className="main--info-value">biuro@pramar.eu</p>		
					</div>

					
				</div>

        </>
    )
}

export default Header
