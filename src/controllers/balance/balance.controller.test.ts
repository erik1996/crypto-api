import fetchMock from "jest-fetch-mock";

import { getMockReq, getMockRes } from "@jest-mock/express";

import * as responseSender from "../../utils/response/response.helper";
import { getBalanceForAddresses } from "./balance.controller";

describe("sendErrorResponse", () => {
  const { res: mRes } = getMockRes();
  beforeAll(() => {
    jest.clearAllMocks();
  });

  it("SendSuccessResponse function should be called", async () => {
    const spySendSuccessResponse = jest.spyOn(
      responseSender,
      "sendSuccessResponse"
    );
    const mReq = getMockReq({
      query: {
        address: ["0xBcFE52fEF72A70AD09245e40AEAcCE4B1e851320"],
      },
    });

    await getBalanceForAddresses(mReq, mRes);

    expect(spySendSuccessResponse).toHaveBeenCalled();
  });

  it("SendSuccessResponse function should be called", async () => {
    const spySendSuccessResponse = jest.spyOn(
      responseSender,
      "sendSuccessResponse"
    );
    const mReq = getMockReq({
      query: {
        address: [...Array(21).keys()].map(
          () => "0xBcFE52fEF72A70AD09245e40AEAcCE4B1e851320"
        ),
      },
    });

    await getBalanceForAddresses(mReq, mRes);

    expect(spySendSuccessResponse).toHaveBeenCalled();
  });

  it("SendErrorResponse function should be called", async () => {
    const spySendErrorResponse = jest.spyOn(
      responseSender,
      "sendErrorResponse"
    );
    const mReq = getMockReq();

    fetchMock.mockReject();
    await getBalanceForAddresses(mReq, mRes);

    expect(spySendErrorResponse).toHaveBeenCalled();
  });
});
