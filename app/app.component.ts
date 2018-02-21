import { Component } from "@angular/core";
import {getBoolean, setBoolean} from "tns-core-modules/application-settings";
import {Message} from "nativescript-plugin-firebase";
import * as LocalNotifications from "nativescript-local-notifications";
const firebase = require("nativescript-plugin-firebase");

if(getBoolean("firstRun", true)){
    LocalNotifications.requestPermission().then(granted =>{
        firebase.init({
            onMessageReceivedCallback: (message: Message) => {
                LocalNotifications.schedule([{title:message.title, body:message.body}]);
            }
        }).then(instance =>{
            firebase.subscribeToTopic("notifications");
            console.log("Subscribed to notifications");
            setBoolean("firstRun", false);
        }, error =>{
            console.log("firebase init error: "+error);
        });
    });
}

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { }
