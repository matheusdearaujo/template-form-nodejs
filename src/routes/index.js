import { Router } from "express";

const routes = Router();

import * as mailController from "../controllers/MailController.js";

routes.get("/", res => res.sendFile(`${__dirname}/public/index.html`));
routes.post("/", mailController.sendMail);

export default routes;
