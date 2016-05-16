define(['app'], function(app) {
  app.registerController('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope', '$rootScope'];

  function HomeCtrl($scope, $rootScope) {
    var vm = this;
    $rootScope.tabs = ['Home', 'Gallary', 'Hello1', "Hello2"];
    vm.selectedTab = $rootScope.tabs[0];
    
    $scope.msg = "Hello Home";
    console.log("Hello");
  }
});
