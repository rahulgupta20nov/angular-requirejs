require.config({
  waitSeconds: 600,
  paths: {
    /*Java Script Independent Library*/
    // 'jquery': '../libs/jquery/dist/jquery.min',
    /*Angular Dependency*/
    'jquery': '../libs/jquery/dist/jquery.min',
    'angular': '../libs/angular/angular.min',
    'ui-router': '../libs/angular-ui-router/release/angular-ui-router.min',
    /*Angular couch-potato*/
    'angular-couch-potato': '../project-libs/angular-dynamic-load.min',
    /*load the module*/
    /*Load Essential Controller*/
    'base-modules': 'modules/base-modules',
    'SuperCtrl': 'controllers/SuperCtrl'
  },
  priority: ['angular'],
  shim: {
    'jquery': {
      deps: [],
      exports: 'jquery'
    },
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'ui-router': {
      deps: ['angular'],
      exports: 'ui-router'
    },

    'base-modules': {
      deps: ['angular', 'ui-router'],
      exports: 'support-modules'
    }
  }
});
// run is required to force the app to run, not because we need to interact
// with it.  Anything required here will by default be combined/minified by
// r.js if you use it.
require(['angular', 'app', 'SuperCtrl', 'app-init'], function(angular, app) {
  angular.element(document).ready(function() {
    angular.bootstrap(document, [app.name, function() {
      // for good measure, put ng-app on the html element
      // studiously avoiding jQuery because angularjs.org says we shouldn't
      // use it.  In real life, there are a ton of reasons to use it.
      // karma likes to have ng-app on the html element when using requirejs.
      angular.element(document).find('html').addClass('ng-app');
    }]);
  });
});