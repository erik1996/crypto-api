import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as Joi from "joi";

import { logger } from "../utils/logger/logger";
import { sendCustomResponse } from "../utils/response/response.helper";

export const validationMiddleware = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.query);
    if (!error) {
      next();
    } else {
      let message = error.details
        .map((i) => i.message)
        .join(",")
        .split(/(?=[A-Z])/)
        .join(" ")
        .replace(/[^a-zA-Z0-9 ]/g, "");
      message = message.charAt(0).toUpperCase() + message.slice(1);
      logger.error(message);
      return sendCustomResponse(res, StatusCodes.BAD_REQUEST, {
        message,
        data: null,
      });
    }
  };
};
