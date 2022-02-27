import React, { useRef, useState } from 'react'
import Maps from './Maps'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha'
import Reaptcha  from 'reaptcha'

const Contact = () => {

	const [captcha, setCaptcha] = useState()
	const form = useRef();
	 
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm('pramar_eu', 'Pramar_sendMail', form.current, 'user_4TSaMqSIvfzKDIRSChQYp')
		  .then((result) => {
			  console.log(result.text);
			  alert("Wiadomość została wysłana!")
		  }, (error) => {
			  console.log(error.text);
			  alert("Wysąpił problem, spróbuj później.")
		  });
	  };
	  
    return (
        <div className="section--container">
			<section className="section" id="contact">
				<h2>Kontakt</h2>

				<p>Adres: <strong>ul.Rodówko 1, Grabowiec</strong></p>
				<p>Nr tel.: <strong>501 820 881</strong></p>
				<p>NIP: <strong>5882339009</strong></p>
				<p>REGON: <strong>520751583</strong></p>

				<div className="map--container">
					<Maps />
				</div>

				<h3>Formularz kontaktowy</h3>
				<form ref={form} onSubmit={sendEmail}>
					<div className="form--double">
						<div className="form--doubleitem">
    						<label htmlFor="fname">Imię</label>
    						<input type="text" id="fname" name="firstname" placeholder="Jan" required/>
    					</div>
    					<div className="form--doubleitem">
    						<label htmlFor="lname">Nazwisko</label>
    						<input type="text" id="lname" name="lastname" placeholder="Kowalski" required/>
    					</div>
    				</div>
    				<div className="form--double">
						<div className="form--doubleitem">
    						<label htmlFor="phone">Nr tel.</label>
    						<input type="text" id="phone" name="phone" placeholder="123456789" required/>
    					</div>
    					<div className="form--doubleitem">
    						<label htmlFor="email">Adres e-mail</label>
    						<input type="email" id="email" name="email" placeholder="kowalski@mail.pl" required/>
    					</div>
    				</div>
    				<div className="form--single">
    					<label htmlFor="subject">Wiadomość</label>
    					<textarea id="subject" name="message" placeholder="Twoja wiadomość..."></textarea>
    				</div>			
    				<div className="form--submit">
						<Reaptcha 
								sitekey="6LcAOlceAAAAAEX3p9AlDZi41q1B8nY4pm0JM41a"
								onVerify={() => setCaptcha(true)}
						/>
						<input type="submit" value="Wyślij" disabled={!captcha} style={!captcha ? {backgroundColor: "grey"} : {}} />
    				</div>			
  				</form>
			</section>
		</div>
    )
}


export default Contact
