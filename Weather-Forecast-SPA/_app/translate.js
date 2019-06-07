
//Languages
const english = {
  label:{
    title: "AngularJS Weather",
    forecastBy:"Forecast by city, eg. CITY,COUNTRY",
    dayTemperature: "Daytime temperature: ",
    getForecast: "Get Forecast",
    home: "Home",
    forecast: "Forecast", 
    days:"Days: ",
    back:"Back to search",   
  }
}

const portuguese = {
  label:{
    title: "Previsão do tempo com AngularJS",
    forecastBy:"Previsão por cidade, ex: Cidade,País",
    dayTemperature: "Previsão para o dia: ",
    getForecast: "Qual a previsão?",
    home: "Inicio",
    forecast: "Previsão",
    days:"Dias: ",
    back:"Voltar a busca",    
  }
}

//Translate pt-br
app.config(["$translateProvider", ($translateProvider)=>{
  $translateProvider.translations("en", {...english}); 
  $translateProvider.translations("pt", {...portuguese}); 
  $translateProvider.preferredLanguage("pt"); 
}]);

