## About this project
This is a sample project for sending push notifications using Firebase. It basically handles FCM Message and turns it into a local notification. The app itself is based on the Angular template. This project currently only supports the Android platform.

## Running your own version
In order to make this project work for your own Firebase project, you have to do the following things:
* Replace *app/App_Resources/Android/google-services.json* with the one downloaded from the Firebase console
* Replace *org.thedjdoorn.tnsnotify* in *package.json* with your own package name

## Enabling iOS
In order to enable this project for iOS, you have to do the following:
* Set *using_ios* in *firebase.nativescript.json* to **true**
* Download *GoogleService-Info.plist* from the Firebase console and put it in *app/App_Resources/iOS/GoogleService-Info.plist*
* Follow the configuration instructions for FCM for iOS [here](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/master/docs/MESSAGING.md)

## Sending a push notification
In the Firebase console, send a new notification with a title and body to the "notifications" topic

## What's next?
You can mess around in *app.component.ts*. For instance, try subscribing to another topic. You can take a look at the documentation for [FCM](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/master/docs/MESSAGING.md) or [LocalNotifications](https://github.com/EddyVerbruggen/nativescript-local-notifications) for some inspiration.
