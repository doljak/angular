app.directive("forecastDetail", ()=>{
  return{
    restrict:"E",
    templateUrl: "_components/forecastDetails.html",
    replace:true,
    scope:{
      weatherDay: "=",
      getDate:"&",
      dateFormat:"@",
    }
  }
});

