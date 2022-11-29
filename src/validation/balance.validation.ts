import * as Joi from "joi";

export const getBalance = Joi.object().keys({
  address: Joi.array().min(1).max(100).required(),
});
