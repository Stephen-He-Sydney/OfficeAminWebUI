'use strict';

/**
 * @ngdoc function
 * @name officeAdminWebUiApp.service:loginService
 * @description
 * # loginService
 * Service of the officeAdminWebUiApp
 */

appMainModule
.service('loginService', function ($http, $timeout) {

    this.isValidUser = function (inputVal, callback) {

        $http.post('api/login', inputVal).success(function (response) {
            callback(response);
        });

        //$timeout(function () {
        //    $http.post('api/login', inputVal).success(function (response) {
        //        callback(response);
        //    });
        //}, 2000);//delay 2 seconds before returning value
    };
});