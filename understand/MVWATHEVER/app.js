const app = angular.module("angularApp", []);

const mainController = ($scope, $log, $filter, $timeout, $http)=>{
  $scope.lowerCase = ()=>{
    return $filter('lowercase')($scope.handleName);
  }

  $scope.$watch('handleName', function(newValue, oldValue){
    if(oldValue !== undefined){
      $log.warn("value Changed!");
      $log.error("Old: "+oldValue);
      $log.info("New:"+newValue);
    }
  });

    $timeout(function(){
      $scope.handleName = "test";
      $log.info("-----");
    }, 3000);

    $http.get('rules.json')
          .success(function(response){
            $log.info(response);
            $scope.rules = response;
          })
          .error(function(data, error){
            console.log(error);
          })
}

app.controller("mainController", ["$scope", "$log", "$filter", "$timeout", "$http", mainController])

