import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT,
  ETHERSCAN_URL: process.env.ETHERSCAN_URL,
  ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY,
};
