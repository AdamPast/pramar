import React from 'react'

const Header = () => {
    return (
        <>
        <img src="logo.png" class="only--mobile" alt="logo"/>
				<h1 class="visuallyhidden">Wprowadzenie</h1>
				<p class="main--description">Jesteś na <strong class="highlight">Trasie Kaszubskiej</strong> i <strong>uszkodziła</strong> Ci się ciężarówa? A może masz do wymiany <strong>oponę</strong>?<br></br> Nie martw się coś zaradzimy</p>
				<div class="main--items">
					<div class="main--item" id="localization">
						<i class="fas fa-map-marker-alt fa-2x"></i>
						<p class="main--info">Gdzie działamy?</p>
						<p class="main--info-value">Trasa Kaszubska</p>		
					</div>

					<div class="main--item">
						<i class="fas fa-phone-alt fa-2x"></i>
						<p class="main--info">Kontakt</p>
						<p class="main--info-value">123 456 789</p>		
					</div>

					<div class="main--item">
						<i class="fa-solid fa-envelope fa-2x"></i>
						<p class="main--info">Kontakt</p>
						<p class="main--info-value">biuro@pramar.eu</p>		
					</div>

					
				</div>

        </>
    )
}

export default Header
