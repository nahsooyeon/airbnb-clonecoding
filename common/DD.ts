/** 
 * #install rum
 * $ yarn add @datadog/browser-rum
 * 
 * setting .env
 * NEXT_PUBLIC_DATADOG_CLIENT_TOKEN=a
 * NEXT_PUBLIC_DATADOG_SITE=a
 * NEXT_PUBLIC_DATADOG_SERVICE=a
 * NEXT_PUBLIC_DATADOG_FORWARDERRORSTOLOGS=
 * NEXT_PUBLIC_DATADOG_SAMPLERATE=a
 * 
 * sample code
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: 'blah blah',
    clientToken: 'blah blah',
    site: 'datadoghq.com',
    service:'datadog-test-sample',
    
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    sessionReplaySampleRate: 20,
    trackInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();
*/
import { datadogLogs, LogsInitConfiguration } from "@datadog/browser-logs";
import { datadogRum } from "@datadog/browser-rum";

export const DD_Initialize = () => {
  console.log("Datadog initialize");
  datadogLogs.init({
    clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN,
    site: "datadoghq.com",
    service: "datadog-test-sample",
    forwardErrorsToLogs: true,
    sampleRate: 100,
    env: "dev",
  } as LogsInitConfiguration);

  datadogRum.init({
    applicationId: process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID,
    clientToken: process.env.NEXT_PUBLIC_DATADOG_RUM_TOKEN,
    site: "datadoghq.com",
    service: "datadog-test-sample",
    env: "dev",
    version: "1.0.0",

    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sampleRate: 100,
    sessionReplaySampleRate: 100,
    trackInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: "allow",
  });
  datadogRum.startSessionReplayRecording();
};
