import { config } from "./config";

import cors from "cors";
import express from "express";
import morgan from "morgan";

import appRouter from "./routes";
import { logger, morganJSONFormat } from "./utils/logger/logger";

const app = express();

const myStream = {
  write: (text: string) => {
    logger.info(text);
  },
};

app.use(morgan(morganJSONFormat(), { stream: myStream }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = config.PORT;

// * Routes * //
app.use(appRouter);

// * Start * //
app.listen(port, () => logger.info(`Server listens on ${port}`));

export default app;
