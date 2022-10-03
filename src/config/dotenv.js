import "dotenv/config";

if (!process.env.MAIL_USER || !process.env.MAIL_PASS)
	throw new Error("Pending credentials.");

export const environments = {
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	user: process.env.MAIL_USER,
	pass: process.env.MAIL_PASS,
};
