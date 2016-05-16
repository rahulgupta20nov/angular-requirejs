// Anything required here wil by default be combined/minified by r.js
// if you use it.

define(['app', 'routeDefs'], function(app) {

  app.config([configApp])
    .run(['$dynamicLoad', runApp]);
  // Configuration Function
  function configApp() {

  }
  // Runnable function
  function runApp($dynamicLoad) {
    //angular.element('base').remove();
    /*by assigning the dynamicLoad service to the lazy property, we
    the register functions will know to run-time-register components
    instead of config-time-registering them.*/
    app.lazy = $dynamicLoad;
  }
});
