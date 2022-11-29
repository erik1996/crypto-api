import { StatusCodes } from "http-status-codes";

import { getMockRes } from "@jest-mock/express";

import * as responseSender from "../../utils/response/response.helper";
const { res: mRes } = getMockRes();

describe("sendErrorResponse", () => {
  it("sendCustomResponse function should be called", () => {
    const spySendCustomResponse = jest.spyOn(
      responseSender,
      "sendCustomResponse"
    );
    responseSender.sendErrorResponse(mRes, "");

    expect(spySendCustomResponse).toHaveBeenCalledWith(
      mRes,
      StatusCodes.INTERNAL_SERVER_ERROR,
      expect.anything()
    );
  });
});

describe("sendSuccessResponse", () => {
  it("sendCustomResponse function should be called", () => {
    const spySendCustomResponse = jest.spyOn(
      responseSender,
      "sendCustomResponse"
    );
    responseSender.sendSuccessResponse(mRes, {});

    expect(spySendCustomResponse).toHaveBeenCalledWith(
      mRes,
      StatusCodes.OK,
      {}
    );
  });

  it("sendCustomResponse function should be called with null data", () => {
    const spySendCustomResponse = jest.spyOn(
      responseSender,
      "sendCustomResponse"
    );
    responseSender.sendSuccessResponse(mRes);

    expect(spySendCustomResponse).toHaveBeenCalledWith(
      mRes,
      StatusCodes.OK,
      null
    );
  });
});

describe("sendCustomResponse", () => {
  mRes.json = jest.fn();
  it("Res.json function should be called", () => {
    responseSender.sendCustomResponse(mRes, StatusCodes.OK, {});
    expect(mRes.json).toBeCalled();
  });
});
