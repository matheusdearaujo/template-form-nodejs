require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('src'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    const mailOptions = {
        from: req.body.email,
        to: process.env.MAIL_USER,
        subject: `Mensagem de ${req.body.email}: ${req.body.subject}`,
        html: `<p>${req.body.message}</p>`,
        replyTo: req.body.email,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email enviado: ' + info.response);
            res.send('success');
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
