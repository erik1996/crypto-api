import { Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { IResponseData } from "../../types";
import { logger } from "../logger/logger";

export const sendErrorResponse = (res: Response, error: unknown): void => {
  logger.error(error);
  sendCustomResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, {
    message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    data: null,
  });
};

export const sendSuccessResponse = (
  res: Response,
  data: IResponseData["data"] = null
): void => {
  logger.info(data);
  sendCustomResponse(res, StatusCodes.OK, data);
};

export const sendCustomResponse = (
  res: Response,
  statusCode: number,
  data: IResponseData["data"]
): void => {
  res.status(statusCode).json(data);
};
