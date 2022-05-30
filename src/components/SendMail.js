import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import '../css/app/sendmail.css'



function SendMail() {

    const [getmail, setMail] = useState('');


    function sendEmail() {
        if (getmail) {
            var template = { to: getmail }
            emailjs.init('user_otiYY4TvDV3Jb6DEpABzi');
            emailjs.send('service_y1c36te', 'template_y73ghiq', template)
            template.to = ''
            setMail('')
        }
        else
            console.log("nu s-a trimis");
    }


    return (
        <div className="sendmail">
            <p>Pentru mai multe date de contact, introdu email-ul:</p>
            <input type="email" value={getmail} onChange={(e) => { setMail(e.target.value) }} className="email" name="email" required></input>
            <a onClick={() => sendEmail()}>Trimite</a>
        </div>
    );

}

export default SendMail;

