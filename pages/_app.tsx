import "../styles/globals.scss";
import { datadogLogs } from "@datadog/browser-logs";

datadogLogs.init({
  clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN,
  site: "datadoghq.com",
  forwardErrorsToLogs: true,
  sampleRate: 100,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
