"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("tns-core-modules/application-settings");
var LocalNotifications = require("nativescript-local-notifications");
var firebase = require("nativescript-plugin-firebase");
if (application_settings_1.getBoolean("firstRun", true)) {
    LocalNotifications.requestPermission().then(function (granted) {
        firebase.init({
            onMessageReceivedCallback: function (message) {
                LocalNotifications.schedule([{ title: message.title, body: message.body }]);
            }
        }).then(function (instance) {
            firebase.subscribeToTopic("notifications");
            console.log("Subscribed to notifications");
            application_settings_1.setBoolean("firstRun", false);
        }, function (error) {
            console.log("firebase init error: " + error);
        });
    });
}
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsOEVBQTZFO0FBRTdFLHFFQUF1RTtBQUN2RSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUV6RCxFQUFFLENBQUEsQ0FBQyxpQ0FBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7SUFDN0Isa0JBQWtCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO1FBQy9DLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDVix5QkFBeUIsRUFBRSxVQUFDLE9BQWdCO2dCQUN4QyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVFLENBQUM7U0FDSixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtZQUNaLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDM0MsaUNBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFPRDtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO09BRVcsWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge2dldEJvb2xlYW4sIHNldEJvb2xlYW59IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XG5pbXBvcnQgKiBhcyBMb2NhbE5vdGlmaWNhdGlvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhbC1ub3RpZmljYXRpb25zXCI7XG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5pZihnZXRCb29sZWFuKFwiZmlyc3RSdW5cIiwgdHJ1ZSkpe1xuICAgIExvY2FsTm90aWZpY2F0aW9ucy5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oZ3JhbnRlZCA9PntcbiAgICAgICAgZmlyZWJhc2UuaW5pdCh7XG4gICAgICAgICAgICBvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrOiAobWVzc2FnZTogTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShbe3RpdGxlOm1lc3NhZ2UudGl0bGUsIGJvZHk6bWVzc2FnZS5ib2R5fV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGluc3RhbmNlID0+e1xuICAgICAgICAgICAgZmlyZWJhc2Uuc3Vic2NyaWJlVG9Ub3BpYyhcIm5vdGlmaWNhdGlvbnNcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1YnNjcmliZWQgdG8gbm90aWZpY2F0aW9uc1wiKTtcbiAgICAgICAgICAgIHNldEJvb2xlYW4oXCJmaXJzdFJ1blwiLCBmYWxzZSk7XG4gICAgICAgIH0sIGVycm9yID0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZSBpbml0IGVycm9yOiBcIitlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9XG4iXX0=