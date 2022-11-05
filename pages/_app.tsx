import "../styles/globals.scss";
import { datadogLogs } from "@datadog/browser-logs";
import { datadogRum } from "@datadog/browser-rum";
import { useEffect } from "react";

datadogLogs.init({
  clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN,
  site: "datadoghq.com",
  forwardErrorsToLogs: true,
  sampleRate: 100,
});

datadogRum.init({
  applicationId: process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID,
  clientToken: process.env.NEXT_PUBLIC_DATADOG_RUM_TOKEN,
  site: "datadoghq.com",
  service: "sooyeon-datadog-test",
  env: "prod",
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sampleRate: 100,
  sessionReplaySampleRate: 20,
  trackInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: "mask-user-input",
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    datadogRum.startSessionReplayRecording();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
