ionicApp.controller("mainController", ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/data.json').success(
      function (data) {
        $scope.games = data;

        $scope.moveGame = function (game, fromIndex, toIndex) {
          $scope.games.splice(fromIndex, 1);
          $scope.games.splice(toIndex, 0, game);
        };

        $scope.onGameDelete=  function (game) {
          $scope.games.splice($scope.games.indexOf(game), 1)
        };

        $scope.toggleStar = function (game) {
          game.star = !game.star;
        };

        $scope.doRefresh = function () {
          $http.get('data/data.json').success(
            function (data) {
              $scope.games = data;
              $scope.$broadcast('scroll.refreshComplete');
            });
        }
      }
    )
  }]);

