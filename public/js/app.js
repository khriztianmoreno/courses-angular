(function () {

  var app = angular.module('brainsCourse',[
  	'ngRoute',
  	'course.controllers',
  	'course.directives',
    'course.filters'
  ]); 

  app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/course.html',
        controller: 'CourseController',
        controllerAs: 'crsCtrl'
      });

  }]);

})();
