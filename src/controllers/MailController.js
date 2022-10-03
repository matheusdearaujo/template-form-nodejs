import { environments, mail } from "../config/index.js";

export const sendMail = (req, res) => {
	const { user } = environments;
	const { email, name, subject, message } = req.body;

	const mailOptions = {
		from: email,
		to: user,
		subject: `Mensagem de ${name}: ${subject}`,
		html: `<p>${message}</p>`,
		replyTo: email,
	};

	mail.sendMail(mailOptions, error => {
		if (!error) res.status(200).send("Email successfully sent.");

		return res.status(500).send("An error occurred, please try again later.");
	});
};
