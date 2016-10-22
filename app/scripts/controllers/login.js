'use strict';

/**
 * @ngdoc function
 * @name officeAdminWebUiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the officeAdminWebUiApp
 */

appMainModule
.controller("LoginCtrl", ["loginService", function (loginService) {
    this.submitForm = function (isValid) {
        if (isValid) {

            // var inputVal = { Username: this.username, Password: this.pwd };

            // loginService.isValidUser(inputVal, function (response) {
            //     if (response) {
            //         alert("approved!!!!!!!!!!!");
            //     } else {
            //         alert("deny!!!!!!!!!!!");
            //     }
            // });
            alert("login!!!!!!!!!!!!!!!");
        }
    };
}]);