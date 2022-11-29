import { Router } from "express";

import { getBalanceForAddresses } from "../controllers/balance/balance.controller";
import { validationMiddleware } from "../middleware/validation.middleware";
import { getBalance } from "../validation/balance.validation";

const balanceRouter = Router();

balanceRouter.get(
  "/",
  validationMiddleware(getBalance),
  getBalanceForAddresses
);

export default balanceRouter;
