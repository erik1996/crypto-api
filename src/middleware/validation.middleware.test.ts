import { getMockReq, getMockRes } from "@jest-mock/express";

import * as responseSender from "../utils/response/response.helper";
import { getBalance } from "../validation/balance.validation";
import { validationMiddleware } from "./validation.middleware";

describe("Validation Middleware", () => {
  const { res: mRes, next: mNext } = getMockRes();

  it("Next function should be called", () => {
    const mReq = getMockReq({
      query: {
        address: ["0xBcFE52fEF72A70AD09245e40AEAcCE4B1e851320"],
      },
    });
    validationMiddleware(getBalance)(mReq, mRes, mNext);
    expect(mNext).toBeCalled();
  });

  it("sendCustomResponse function should be called", () => {
    const spySendCustomResponse = jest.spyOn(
      responseSender,
      "sendCustomResponse"
    );
    const mReq = getMockReq({ query: {} });
    validationMiddleware(getBalance)(mReq, mRes, mNext);
    expect(spySendCustomResponse).toBeCalled();
  });
});
