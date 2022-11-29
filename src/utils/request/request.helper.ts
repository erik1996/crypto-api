import { config } from "../../config";

export function getRequestUrl(addresses: string[]): string {
  const url = `${config.ETHERSCAN_URL}`;
  const params = {
    module: "account",
    action: "balancemulti",
    tag: "latest",
    apikey: config.ETHERSCAN_API_KEY,
  };

  return `${url}/?${new URLSearchParams({
    ...params,
    address: addresses.join(","),
  })}`;
}
