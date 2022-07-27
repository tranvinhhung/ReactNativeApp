/**
 * @format
 */
import React from "react"
import {Provider} from 'react-redux';
import {store} from './src/redux/store/index';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import OneSignal from 'react-native-onesignal';

//OneSignal Init Code
OneSignal.setLogLevel(6, 0);
OneSignal.setAppId("1e617707-a7db-4d94-aae3-1667c495ceda");
//END OneSignal Init Code

//Prompt for push on iOS
OneSignal.promptForPushNotificationsWithUserResponse(response => {
  console.log("Prompt response:", response);
});

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
  let notification = notificationReceivedEvent.getNotification();
  console.log("notification: ", notification);
  const data = notification.additionalData
  console.log("additionalData: ", data);
  // Complete with null means don't show a notification.
  notificationReceivedEvent.complete(notification);
});

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log("OneSignal: notification opened:", notification);
});
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
