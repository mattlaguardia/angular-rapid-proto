var app = angular.module("characterMashupApp",['ngRoute']);

//// ROUTES ////
app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: "index.html",
      controller: "CharacterIndexCtrl"
    });
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});

//// CONTROLLERS ////

app.controller("CharacterIndexCtrl", function($scope, $http){

  $http.get("http://www.anapioficeandfire.com/api/houses?hasTitle=true_or_false")
    .then(function(response, error){
      if(error){
        console.log("Error: " + error);
      }
    vm = response.data;
    $scope.characters = vm[Math.floor(Math.random()*10)];
    console.log($scope.characters)
  })
})

//// MODELS ////
app.factory("CharacterService", function(){
  var CharacterService = {};

  CharacterService.query = function(){
    return ALL_CHARATERS
  }
})
