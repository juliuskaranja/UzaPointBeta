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
        $scope.upFood = function () {
            $state.go('mainMenu.subCategory');
        }
    })
    .controller('subCategoryController', function ($scope,$state) {
            $scope.findFood = function () {
                $state.go('mainMenu.orderProductPage');
            }
    })
    .controller('mainController', function ($scope,$state,$ionicLoading,$timeout) {
        $scope.logout = function () {
            $ionicLoading.show();
            $timeout(function () {
                $ionicLoading.hide();
                $state.go('home');
            },500)
        }
    })
    .controller('searchController', function ($scope,$state,$ionicLoading,$timeout) {
        var loadingProduct = function () {
            $ionicLoading.show();
            $timeout(function () {
                $ionicLoading.hide();
            },800);
        };
        //
        $scope.search = function () {
            loadingProduct();
        };
        $scope.orderProduct = function () {
          $state.go('mainMenu.orderProductPage')
        }
    })
    .controller('theMessage', function ($scope,$state) {

    });