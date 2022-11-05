import { datadogLogs } from "@datadog/browser-logs";
import { AppContext } from "next/app";

export const DDPageLog = (appContext: AppContext) => {
  return new Promise(promiseHandler(appContext));
};

const promiseHandler = (appContext: AppContext) => {
  return async (resolve, reject) => {
    try {
      console.log(appContext.ctx.asPath);
      datadogLogs.logger.info("page path changed", {
        name: "previous path",
        referrer: appContext.ctx.asPath,
      });
    } catch (e) {
      console.error(e);
    } finally {
      resolve(true);
    }
  };
};
