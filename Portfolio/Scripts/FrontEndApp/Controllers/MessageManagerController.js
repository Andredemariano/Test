var app = angular.module("managerApp", []);
app.controller("MessageManagerController", function ($rootScope) {
    var self = this;
    self.messageText = "helloTest";
});