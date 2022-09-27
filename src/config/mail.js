import nodemailer from "nodemailer";
import "dotenv/config";

if (!process.env.MAIL_USER || !process.env.MAIL_PASS)
	throw new Error("Credenciais pendentes.");

const {
	MAIL_HOST: host,
	MAIL_PORT: port,
	MAIL_USER: user,
	MAIL_PASS: pass,
} = process.env;

export { user };

export const mail = nodemailer.createTransport({
	host,
	port,
	auth: { user, pass },
});
