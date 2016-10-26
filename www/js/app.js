// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('uzaPoint', ['ionic','uzaPoint.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
      $stateProvider
          .state('home',{
            url:'/home',
            templateUrl:'templates/home.html',
             controller: 'homeController'
          })
        .state('login',{
            url:'/login',
              templateUrl:'templates/login.html',
              controller:'loginController'
        })
          .state('mainMenu',{
              url:'/main',
              templateUrl:'templates/sideMenu.html',
              abstract:true,
              controller:'mainController'
          })
          .state('mainMenu.dashboard',{
              url:'/dashboard',
              views: {
            'menuContent': {
                templateUrl: 'templates/dashboard.html',
                controller:'dashboardController'
            }
        }
          })
          .state('mainMenu.search',{
              url:'/search',
              views: {
            'menuContent': {
                templateUrl: 'templates/search.html',
                controller:'searchController'
            }
        }
          })

          .state('mainMenu.subCategory',{
              url:'/subCategory',
              views: {
            'menuContent': {
                templateUrl: 'templates/subCategory.html',
                controller:'subCategoryController'
            }
        }
          })
          .state('mainMenu.orderProductPage',{
              url:'/orderProductPage',
              views: {
                  'menuContent': {
                      templateUrl: 'templates/orderProductPage.html'
                  }
          }})
          .state('walkThrough',{
              url:'/walkThrough',
              templateUrl:'templates/walkThrough.html'
          });

        $urlRouterProvider.otherwise('/home');
    });