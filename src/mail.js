const nodemailer = require("nodemailer");

if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
	throw new Error("Credenciais pendentes");
}

const {
	MAIL_HOST: host,
	MAIL_PORT: port,
	MAIL_USER: user,
	MAIL_PASS: pass,
} = process.env;

module.exports = nodemailer.createTransport({
	host,
	port,
	secure: true,
	auth: { user, pass },
});
