import { Router } from "express";

import { sendSuccessResponse } from "../utils/response/response.helper";
import balanceRouter from "./balance.router";

const appRouter = Router();

appRouter.use("/balance", balanceRouter);
appRouter.use("/health", (req, res) => {
  return sendSuccessResponse(res, { time: new Date() });
});

export default appRouter;
