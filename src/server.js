import express from "express";

import routes from "./routes/index.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(routes);

app.listen(5000, () => console.log("✅ Server running on port 5000"));
