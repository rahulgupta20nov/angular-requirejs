/**
 * Created by rahul on 21/9/15.
 */
define(['app'], function(app) {
  app.controller('SuperCtrl', SuperCtrl);

  SuperCtrl.$inject = ['$scope'];

  function SuperCtrl($scope) {
    $scope.msg = "Hello World";
  }
});
