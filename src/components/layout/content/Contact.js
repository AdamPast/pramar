import React, { useRef, useState } from 'react'
import Maps from './Maps'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
const Contact = () => {

	const [message, setMessage] = useState('')
	const [captcha, setCaptcha] = useState()
	const form = useRef();
	 

	 const smsapi = async(mess) =>{
		 console.log('====================================');
		 console.log(mess);
		 console.log('====================================');
		    setMessage(mess);
	 	await axios.post(`https://cors.adamblue.workers.dev/?https://api.smsapi.pl/sms.do?from=Test&to=48737169899&message=${message}&format=json`, {}, {
			 headers:{
				 'Authorization': `Bearer ${process.env.REACT_APP_SMSAPI}`
			 }
		 })
	 	.then(res => {
	     	console.log(res);
	 	})
	 	.catch(err => {
	 		console.log(err);
	 	})
	 }

	

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm('pramar_eu', 'Pramar_sendMail', form.current, 'user_4TSaMqSIvfzKDIRSChQYp')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
	  };

	  //setMessage("Wiadomosc testowa");
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
				<button onClick={() => smsapi("wiadomosc testowa")}>TEST</button>
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
						<ReCAPTCHA
								sitekey="6LcAOlceAAAAAEX3p9AlDZi41q1B8nY4pm0JM41a"
								onChange={() => setCaptcha(true)}
						/>
						<input type="submit" value="Wyślij" disabled={!captcha}/>
    				</div>			
  				</form>
			</section>
		</div>
    )
}


export default Contact
