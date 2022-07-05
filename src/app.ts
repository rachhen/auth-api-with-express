import "dotenv/config";
import express from "express";
import config from "config";
import connectToDo from "./utils/connectToDb";
import log from "./utils/logger";
import routes from "./routes";
import deserializeUser from "./middlewares/deserializeUser";

const port = config.get("port");
const app = express();

app.use(express.json());
app.use(deserializeUser);
app.use(routes);

app.listen(port, () => {
  log.info(`App started at http://localhost:${port}`);

  connectToDo();
});
