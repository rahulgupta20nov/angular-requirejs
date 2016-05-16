define(['app'], function(app) {
  app.provider('injectCSS', [injectCSS]);

  function injectCSS() {
    this.$get = ['$rootScope', '$state', '$q', '$http', '$timeout', $get];

    function $get($rootScope, $state, $q, $http, $timeout) {
      var arrLen;
      return {
        set: set
      };

      function set(cssArray) {
        console.log(cssArray);
        var tries = 0,
          deferred = $q.defer(),
          link;
        arrLen = cssArray.length;
        angular.forEach(cssArray, function(value) {
          tries++;
          if (!angular.element('link#' + value.id).length) {
            link = createLink(value.id, value.href);
            link.onload = deferred.resolve;
            $(link).insertBefore('#basecss');
            // angular.element('head').append(link);
          }
          checkLoaded(value.href, deferred, tries);
        });
        return deferred.promise;
      }

      function createLink(id, url) {
        var link = document.createElement('link');
        link.id = id;
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;
        return link;
      }

      function timeoutLoad(url, deferred, tries) {
        $timeout(function() {
          checkLoaded(url, deferred, tries);
        }, 50);
      }

      function checkLoaded(url, deferred, tries) {
        for (var i in document.styleSheets) {
          var href = document.styleSheets[i].href || "";
          if (href && href !== "" && href.indexOf(url)) {
            if (tries == arrLen)
              deferred.resolve();
            return;
          }
        }
      }
    }
  }
});
