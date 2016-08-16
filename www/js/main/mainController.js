ionicApp.controller("mainController", ['$scope', '$http', '$state',
  function ($scope, $http, $state) {
    $http.get('data/data.json').success(
      function (data) {
        $scope.artists = data;
        $scope.whichArtist =$state.params.aId;

        $scope.data = {showDelete: false,  showReorder: false};

        $scope.moveArtist = function (artist, fromIndex, toIndex) {
          $scope.artists.splice(fromIndex, 1);
          $scope.artists.splice(toIndex, 0, artist);
        };

        $scope.onArtistDelete=  function (artist) {
          $scope.artists.splice($scope.artists.indexOf(artist), 1)
        };

        $scope.toggleStar = function (artist) {
          artist.star = !artist.star;
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

