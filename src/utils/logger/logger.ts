import { createLogger, format, transports } from "winston";
const { combine, timestamp, prettyPrint } = format;

export const logger = createLogger({
  level: "debug",
  format: combine(
    timestamp({
      format: "MMM-DD-YYYY HH:mm:ss",
    }),
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: "logs/logs.log",
    }),
    new transports.File({
      level: "error",
      filename: "logs/error.log",
    }),
  ],
});

export const morganJSONFormat = () =>
  JSON.stringify({
    method: ":method",
    url: ":url",
    http_version: ":http-version",
    remote_addr: ":remote-addr",
    remote_addr_forwarded: ":req[x-forwarded-for]", //Get a specific header
    response_time: ":response-time",
    status: ":status",
    content_length: ":res[content-length]",
    timestamp: ":date[iso]",
    user_agent: ":user-agent",
  });
