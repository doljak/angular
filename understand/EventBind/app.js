const app = angular.module("angularApp", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl:'main.htm',
      controller:'mainController'
    })
    .when('/second',{
      templateUrl:'second.htm',
      controller:'secondController'
    })
})
const services = ["$scope", "$log", "$filter", "$timeout"];

const mainController = ($scope, $log, $filter, $timeout)=>{
  $scope.name = 'Main'
}

app.controller("mainController", ["$scope", "$log", "$filter", "$timeout", mainController])

const secondController = ($scope, $log, $filter, $timeout)=>{
  $scope.name = 'Second'
}

app.controller("secondController", ["$scope", "$log", "$filter", "$timeout", secondController])
