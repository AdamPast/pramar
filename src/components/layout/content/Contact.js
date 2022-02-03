import React, { useRef, useState } from 'react'
import Maps from './Maps'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha'

const Contact = () => {
	
	const [captcha, setCaptcha] = useState(false);


 	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('pramar_eu', 'Pramar_sendMail', form.current, 'user_4TSaMqSIvfzKDIRSChQYp')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
	  };

	const recaptchaRef = React.createRef();

    return (
        <div className="section--container">
			<section className="section" id="contact">
				<h2>Kontakt</h2>

				<p>Adres: <strong>ul. Gwiezdna 4, 00-000 Szemud</strong></p>
				<p>Nr tel.: <strong>123 456 789</strong></p>
				<p>NIP: <strong>x</strong></p>
				<p>REGON: <strong>x</strong></p>
				<div className="map--container">
					<Maps />
				</div>

				<h3>Formularz kontaktowy</h3>

				<form ref={form} onSubmit={sendEmail}>
					<div className="form--double">
						<div className="form--doubleitem">
    						<label for="fname">Imię</label>
    						<input type="text" id="fname" name="firstname" placeholder="Jan" />
    					</div>

    					<div className="form--doubleitem">
    						<label for="lname">Nazwisko</label>
    						<input type="text" id="lname" name="lastname" placeholder="Kowalski" />
    					</div>
    				</div>

    				<div className="form--double">
						<div className="form--doubleitem">
    						<label for="phone">Nr tel.</label>
    						<input type="text" id="phone" name="phone" placeholder="123456789" />
    					</div>

    					<div className="form--doubleitem">
    						<label for="email">Adres e-mail</label>
    						<input type="email" id="email" name="email" placeholder="kowalski@mail.pl" />
    					</div>
    				</div>

    				<div className="form--single">
    					<label for="subject">Wiadomość</label>
    					<textarea id="subject" name="message" placeholder="Twoja wiadomość..."></textarea>
    				</div>
    				
					
    				<div className="form--submit">
						{captcha ? <input type="submit" value="Wyślij" disabled/> : <input type="submit" value="Wyślij" disabled/>}
						<ReCAPTCHA
							sitekey="6LcAOlceAAAAAEX3p9AlDZi41q1B8nY4pm0JM41a"
							onChange={()=>{setCaptcha(true)}}
					/>
    				</div>
    				
  				</form>
			</section>
		</div>
    )
}

export default Contact
