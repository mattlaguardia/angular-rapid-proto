var app = angular.module("characterMashupApp",['ngRoute']);

//// ROUTES ////
app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: "index.html",
      controller: "CharacterIndexCtrl"
    })
    .when('/create', {
      template: "Create Route!!!"
      controller: "CharacterCreateCtrl"
    })
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});

//// CONTROLLERS ////

app.controller("CharacterIndexCtrl", function($scope, $http){
  $scope.search = function(){
    $http.get("http://www.anapioficeandfire.com/api/houses?hasTitle=true_or_false&pageSize=50")
      .then(function(response, error){
        if(error){
          console.log("Error: " + error);
        }
      vm = response.data;
      console.log(response.data)
      $scope.characters = vm[Math.floor((Math.random()*100)/2)];
      console.log($scope.characters)
    });
  };
})

app.controller("CharacterCreateCtrl", function($scope){
  console.log("Found CharacterCreate Controller")
})

//// MODELS ////
app.factory("CharacterService", function(){
  var CharacterService = {};

  CharacterService.query = function(){
    return ALL_CHARATERS
  }
})
