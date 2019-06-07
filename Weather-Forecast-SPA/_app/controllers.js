
//Main controller
app.controller(
  "mainController",
    [
      "$scope",
      "$translate",
      "$location",
      "cityService",
      ($scope, $translate, $location, cityService)=>{
        $scope.city = cityService.city;
        $scope.$watch('city', ()=>{
          cityService.city = $scope.city;
        })
        $scope.getLanguage = (ln)=>{
          $translate.use(ln)
        }
        $scope.submit = ()=>{
          $location.path('/forecast')
        }
      }
    ]
  )

//city controller
app.controller(
  "cityController", 
  [
    "$scope", 
    "$resource", 
    "$translate", 
    "$routeParams", 
    "cityService", 
    ($scope, $resource, $translate, $routeParams, cityService)=>{
      $scope.city = cityService.city
      $scope.days = $routeParams.days || '2';
      $scope.$watch('city', ()=>{
        cityService.city = $scope.city;
      });
      $scope.weatherAPI = $resource(
        "http://api.openweathermap.org/data/2.5/forecast/daily",
        {callback:"JSON_CALLBACK"},
        {get:{method:"JSONP"}}
      );
      $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt:$scope.days, units:"metric", appid:"d502662270146fd431c268f4d7753ec6"});  
      $scope.getDate = (date)=>{
        $scope.dateCorrect = new Date(date * 1000);
        return $scope.dateCorrect;
      }
      $scope.getLanguage = (ln)=>{
        $translate.use(ln);
        $scope.units = (ln === 'pt')? "metric":"imperial";
        $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt:$scope.days, units:$scope.units, appid:"d502662270146fd431c268f4d7753ec6"});
      }
    }
  ]
);