const app = angular.module("angularApp", []);

const mainController = ($scope, $log, $filter)=>{
  $scope.lowerCase = ()=>{
    return $filter('lowercase')($scope.handleName);
  }
}

app.controller("mainController", ["$scope", "$log", "$filter", mainController])

