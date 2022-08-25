require("dotenv").config();

const express = require("express");
const app = express();

const mail = require("./mail");

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.post("/", (req, res) => {
	console.log(req.body);

	const mailOptions = {
		from: req.body.email,
		to: process.env.MAIL_USER,
		subject: `Mensagem de ${req.body.email}: ${req.body.subject}`,
		html: `<p>${req.body.message}</p>`,
		replyTo: req.body.email,
	};

	mail.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			res.send("error");
		} else {
			console.log("Email enviado: " + info.response);
			res.send("success");
		}
	});
});

app.listen(5000, () => {
	console.log("Server running on port 5000");
});
