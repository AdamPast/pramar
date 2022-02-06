import React from 'react'

const Header = () => {
    return (
        <>
        <img src="logo.png" className="only--mobile" alt="logo"/>
				<h1 className="visuallyhidden">Wprowadzenie</h1>
				<p className="main--description">Jesteś na <strong className="highlight">Trasie Kaszubskiej</strong> i <strong>uszkodziła</strong> Ci się ciężarówa? A może masz do wymiany <strong>oponę</strong>?<br></br> Nie martw się coś zaradzimy</p>
				<div className="main--items">
					<div className="main--item" id="localization">
						<i className="fas fa-map-marker-alt fa-2x"></i>
						<p className="main--info">Gdzie działamy?</p>
						<p className="main--info-value">Trasa Kaszubska</p>		
					</div>

					<div className="main--item">
						<i className="fas fa-phone-alt fa-2x"></i>
						<p className="main--info">Kontakt</p>
						<p className="main--info-value">123 456 789</p>		
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
