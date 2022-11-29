import { config } from "../../config";
import { getRequestUrl } from "./request.helper";

describe("getRequestUrl", () => {
  it("should return constructed url based on addresses", () => {
    const url = getRequestUrl(["1", "2"]);

    expect(url).toBe(
      `${config.ETHERSCAN_URL}/?module=account&action=balancemulti&tag=latest&apikey=${config.ETHERSCAN_API_KEY}&address=1%2C2`
    );
  });
});
