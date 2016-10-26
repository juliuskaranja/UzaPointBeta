angular.module('uzaPoint.controllers',[])

    /*the login*/
.controller('loginController', function ($scope,$ionicLoading,$timeout,$state) {

    $scope.loginUser = function () {
        $ionicLoading.show();
        $timeout(function () {
            $ionicLoading.hide();
            $state.go('mainMenu.dashboard');
        },500)
    }})
    .controller('homeController', function ($scope,$state) {
       $scope.goLogin = function () {
           $state.go('login')
       }
    })
    .controller('dashboardController',function($scope,$state){

    })
    .controller('mainController', function ($scope,$state,$ionicLoading,$timeout) {
        $scope.logout = function () {
            $ionicLoading.show();
            $timeout(function () {
                $ionicLoading.hide();
                $state.go('home');
            },500)
        }
    });
    //.controller('loginUser');
