const express = require('express');
const router = express.Router();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.get('/send', (req, res) => {

  //Get Variables from query string in the search bar
  const { recipient, sender, topic, text } = req.query;

  //Sendgrid Data Requirements
  const msg = {
    to: recipient,
    from: sender,
    subject: topic,
    text: text,
  }

  //Send Email
  sgMail.send(msg)
    .then((msg) => console.log(text));
});

