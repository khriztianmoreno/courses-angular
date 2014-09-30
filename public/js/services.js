(function () {

  angular.module('courses.services', [])

    .factory('courseService', ['$http', '$q', '$filter', '$window', function ($http, $q, $filter, $window) {
      var normalize = $filter('normalize');
      var localStorage = $window.localStorage;

      function all() {
        var deferred = $q.defer();

        $http.get('/pokemon.json')
          .success(function (data) {
            deferred.resolve(data);
          });

        return deferred.promise;
      }


      function byName(name) {
        name = normalize(name);
        var deferred = $q.defer();

        all().then(function (data) {
          var results = data.filter(function (course) {
            return normalize(course.name) === name;
          });

          if (results.length > 0) {
            deferred.resolve(results[0]);
          } else {
            deferred.reject();
          }

        });

        return deferred.promise;
      }

      function byType(type) {
        type = normalize(type);
        var deferred = $q.defer();

        all().then(function (data) {
          var results = data.filter(function (course) {
            return course.type.some(function (t) {
              return normalize(t) === type;
            });
          });

          deferred.resolve(results);
        });

        return deferred.promise;
      }


      function saveComment(course, comment) {
        var comments = getComments(course);

        comments.push(comment);
        localStorage.setItem(course, JSON.stringify(comments));
      }

      function getComments(course) {
        var comments = localStorage.getItem(course);

        if (!comments) {
          comments = [];
        } else {
          comments = JSON.parse(comments);
        }

        return comments;
      }

      return {
        all: all,
        byName: byName,
        byType: byType,
        saveComment: saveComment,
        getComments: getComments
      };

    }]);

})();
