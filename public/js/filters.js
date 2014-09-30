(function () {

  angular.module('course.filters', [])
    .filter('imageify', ['$filter', function ($filter) {
      return function (input) {
        var url = "img/coursers/" + input.toLowerCase() + ".png";
        return url;
      };
    }]);

})();
