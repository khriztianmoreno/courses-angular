(function () {

  angular.module('course.directives', [])
    .directive('courseOverview', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/course-overview.html'
      }
    })

    .directive('courseDetails', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/course-details.html'
      }
    })

    .directive('courseName', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/course-name.html'
      }
    })

    .directive('courseImage', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/course-image.html'
      }
    })

    .directive('courseComments', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/course-comments.html',
        controller: function () {
          this.comments = [];
          this.comment = {};
          this.show = false;

          this.toggle = function () {
            this.show = !this.show;
          };

          this.anonymousChanged = function () {
            if (this.comment.anonymous) {
              this.comment.email = "";
            }
          };

          this.addComment = function () {
            this.comment.date = Date.now();
            this.comments.push(this.comment);
            this.comment = {};
          };
        },
        controllerAs: 'cmtsCtrl'
      };
    });

})();
