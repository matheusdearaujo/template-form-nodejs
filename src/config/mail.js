import nodemailer from "nodemailer";
import { environments } from "./dotenv.js";

const { host, port, user, pass } = environments;

export const mail = nodemailer.createTransport({
	host,
	port,
	auth: { user, pass },
});
