// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMessage = async (req, res) => {
    const { username, email, subject, message } = req.body;
    try {
        const msg = {
            
            to: 'luka.cerovic14@gmail.com',
            from: 'luka.cerovic14@gmail.com',
            subject: subject,
            html: `<h1>Dobio si poruku od: <span color:'cyan'>${username}</span></h1>
            <h1>Poruka je: </h1>
            <p>${message}</p>
            <br/><br/>
            <h1>Email je: <span color='cyan'>${email}</span></h1>`
        };
        await sgMail.send(msg);
        console.log('Email sent successfully!');
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
    }
};