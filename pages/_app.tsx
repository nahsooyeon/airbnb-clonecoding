import "../styles/globals.scss";
import { datadogLogs, LogsInitConfiguration } from "@datadog/browser-logs";
import { datadogRum } from "@datadog/browser-rum";
import { useEffect } from "react";

datadogLogs.init({
  clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN,
  site: "datadoghq.com",
  service: "datadog-test-sample",
  forwardErrorsToLogs: true,
  sampleRate: 100,
} as LogsInitConfiguration);

datadogRum.init({
  applicationId: "3e88589b-ace3-4ab9-8a68-df02792aa6e5",
  clientToken: "pub8a17720e8410ba311b6f748ca532afd0",
  site: "datadoghq.com",
  service: "datadog-test-sample",
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

datadogRum.startSessionReplayRecording();

function MyApp({ Component, pageProps }) {
  useEffect(() => {}, []);
  return <Component {...pageProps} />;
}

export default MyApp;
