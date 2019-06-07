//Routes
app.config(($routeProvider)=>{
  $routeProvider
    .when('/',{
      templateUrl: "_pages/home.html",
      controller:'mainController'
    })
    .when('/forecast',{
      templateUrl: "_pages/forecast.html",
      controller:'cityController'
    })
    .when('/forecast/:days',{
      templateUrl: "_pages/forecast.html",
      controller:'cityController'
    })
});
