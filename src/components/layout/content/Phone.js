import React, {useState} from 'react'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'

const Phone = () => {

    const [captcha, setCaptcha] = useState()
    const [number, setNumber] = useState(0);

    const sendPhone = async(e) => {
		e.preventDefault();
        console.log(number);

        await axios.post(`https://cors.adamblue.workers.dev/?https://api.smsapi.pl/sms.do?from=Test&to=48737169899&message=${number}&format=json`, {}, {
            headers:{
                'Authorization': `Bearer ${process.env.REACT_APP_SMSAPI}`
            }
        })
        .then(res => {
            console.log(res);
            alert("Prośba o kontakt została wysłana!")
        })
        .catch(err => {
            console.log(err);
            alert("Wystąpił problem, spróbuj później.")
        })
    }


    return (
        <div className="section--container">
			<section className="section" id="phone--urgent">
				<h2>Telefon od nas</h2>
				<p>Potrzebujesz pilnego kontaktu?</p>
                <p> Podaj poniżej swój numer telefonu abyśmy skontaktowali się jak <strong>najszybciej</strong>.</p>
				
                <form onSubmit={sendPhone} className="phone--form">
                    <label htmlFor="number">Twój numer telefonu</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" required onChange={(e)=> setNumber(e.target.value)} />
                    <ReCAPTCHA
								sitekey="6LcAOlceAAAAAEX3p9AlDZi41q1B8nY4pm0JM41a"
								onChange={() => setCaptcha(true)}
						/>
                    <input type="submit" value="Poproś o kontakt" disabled={!captcha} style={!captcha ? {backgroundColor: "grey"} : {}}/>
                </form>


			</section>
		</div>
    )
}

export default Phone
