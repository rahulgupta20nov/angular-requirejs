define(['app', 'providers/injectCSS'], function(app) {
  app.registerProvider('routeDefs', routeDefs);
  routeDefs.$inject = ['$stateProvider', '$urlRouterProvider', '$dynamicLoadProvider'];

  function routeDefs($stateProvider, $urlRouterProvider, $dynamicLoadProvider) {
    this.$get = [$get];

    function $get() {
      // this is a config-time-only provider
      // in a future sample it will expose runtime information to the app
      return {};
    }

    $urlRouterProvider
      .otherwise('home')
      .when('/', 'home');


    // 1. What URL you want.
    // 2. What is the base File Name of html and JavaScript.
    // 3. What is the Path to reach this file.
    // 4. CSS filename.
    $stateProvider
    // Authentication Routes

      .state('home', routeResolve('home', 'home', 'home', ['home/home']));



    function routeResolve(url, baseName, path, cssName) {
      var ctrlName = baseName.charAt(0).toUpperCase() + baseName.substr(1) + 'Ctrl';
      var cssArray = [];
      angular.forEach(cssName, function(value) {
        var cssId = value.split("/");
        cssId = cssId[cssId.length - 1].toLowerCase().split('.').join("");
        cssArray.push({
          href: "css/" + value + ".css",
          id: cssId + "css"
        });
      });
      path += path ? "/" : "";
      return {
        url: "/" + url,
        templateUrl: 'partials/' + path + baseName + '.html',
        controller: ctrlName,
        controllerAs: 'vm',
        resolve: {
          loadCSS: ['injectCSS', function(injectCSS) {
            return injectCSS.set(cssArray);
          }],
          loadCtrl: ['$q', '$rootScope', function delay($q, $rootScope) {
            var defer = $q.defer();
            pathResolve();

            function pathResolve() {
              return require(['controllers/' + path + ctrlName], function() {
                defer.resolve(true);
                $rootScope.$apply();
              });
            }
            return defer.promise;
          }]
        }
      };
    }
  }
});
