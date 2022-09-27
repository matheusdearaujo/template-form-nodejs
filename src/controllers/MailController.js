import { mail, user } from "../config/mail.js";

export const sendMail = (req, res) => {
	const mailOptions = {
		from: req.body.email,
		to: user,
		subject: `Mensagem de ${req.body.name}: ${req.body.subject}`,
		html: `<p>${req.body.message}</p>`,
		replyTo: req.body.email,
	};

	mail.sendMail(mailOptions, error => {
		if (!error) res.status(200).send("Email successfully sent.");

		return res.status(500).send("An error occurred, please try again later.");
	});
};
