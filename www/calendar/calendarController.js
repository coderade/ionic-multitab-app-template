ionicApp.controller("calendarController", ['$scope', '$http', '$state',
  function ($scope, $http, $state) {
    $http.get('data/data.json').success(
      function (data) {

        $scope.calendar = data.calendar;

        $scope.onAttractionDelete = function (dayIndex, attraction) {
          $scope.calendar[dayIndex].schedule.splice(
            $scope.calendar[dayIndex].schedule.indexOf(attraction), 1)
        };

        $scope.toggleStar = function (attraction) {
          attraction.star = !attraction.star;
        };
        $scope.doRefresh = function () {
          $http.get('data/data.json').success(
            function (data) {
              $scope.calendar = data.calendar;
              $scope.$broadcast('scroll.refreshComplete');
            });
        }
      }
    )
  }]);
