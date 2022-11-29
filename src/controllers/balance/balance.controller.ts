import fetch from "cross-fetch";
import { Request, Response } from "express";

import { IBalance } from "../../types";
import { getRequestUrl } from "../../utils/request/request.helper";
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "../../utils/response/response.helper";

export async function getBalanceForAddresses(req: Request, res: Response) {
  try {
    const address = req.query.address as string[];
    let addresses: IBalance[] | null = null;

    // Make paraller request if address length bigger then 20
    if (address.length > 20) {
      const reqArr = [];

      // Split to different array
      while (address.length > 0) {
        const chunk = address.splice(0, 20);

        reqArr.push(fetch(getRequestUrl(chunk)).then((res) => res.json()));
      }

      // Parraller request and mapping response
      const data = (await Promise.all(reqArr))
        .map((item) => item.result)
        .flat(1);

      addresses = data;
    } else {
      const response = await fetch(getRequestUrl(address));
      const data = await response.json();
      addresses = data.result;
    }
    // Total balance
    const totalBalance = addresses.reduce(
      (n: number, { balance }) => n + parseInt(balance, 10),
      0
    );
    return sendSuccessResponse(res, { addresses, totalBalance });
  } catch (error) {
    return sendErrorResponse(res, error);
  }
}
