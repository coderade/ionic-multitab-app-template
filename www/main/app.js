'use strict';

var ionicApp = angular.module('ionicApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'main/tabs.html'
    })
    .state('tabs.artists',{
      url: '/artists',
      views: {
        'artists-tab': {
          templateUrl: '../artists/artistsList.html',
          controller: 'artistsController'
        }
      }
    })
    .state('tabs.detail',{
      url: '/artists/:slug',
      views: {
        'artists-tab': {
          templateUrl: '../artists/artistDetail.html',
          controller: 'artistsController'
        }
      }
    })
    .state('tabs.home',{
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: 'main/home.html'
        }
      }
    });
    $urlRouterProvider.otherwise('/tab/home')
});


