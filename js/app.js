/*For routing API call is not require to mention full URL path
 * Its add automatically
 * Like your API is:- "api/quoteAPI.php/fetchAllQuote"
 * not require to mention full path*/

var gUser = "";
var gAccessToken = "";

define(['angular', 'angular-couch-potato', 'base-modules'],
  function(angular, dynamicLoad) {
    /*Angular Setter*/
    var app = angular.module('myApp', ['base-modules']);
    /*Angular Setter*/

    /*Config for html5mode enable*/
    // app.config(["$locationProvider", function($locationProvider) {
    //   if (device_value == 'other')
    //     $locationProvider.html5Mode(true);
    // }]);

    /*For Lazy loading configure jacktrade app in dynamicLoad Lib*/
    dynamicLoad.configureApp(app);

    /*Return Getter to all Controllers, Services, directives, filters, constants, values, providers, decorators, etc.
     * Very Important Statement*/
    return app;
  }
);
