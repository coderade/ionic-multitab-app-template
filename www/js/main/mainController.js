ionicApp.controller("mainController", ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/data.json').success(
      function (data) {
        $scope.artists = data;

        $scope.moveArtist = function (artist, fromIndex, toIndex) {
          $scope.artists.splice(fromIndex, 1);
          $scope.artists.splice(toIndex, 0, artist);
        };

        $scope.onArtistDelete=  function (game) {
          $scope.artists.splice($scope.artists.indexOf(game), 1)
        };

        $scope.toggleStar = function (game) {
          game.star = !game.star;
        };

        $scope.doRefresh = function () {
          $http.get('data/data.json').success(
            function (data) {
              $scope.artists = data;
              $scope.$broadcast('scroll.refreshComplete');
            });
        }
      }
    )
  }]);

