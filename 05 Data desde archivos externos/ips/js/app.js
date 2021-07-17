(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  //http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK
	
  // Variable para guardar la respuesta del servicio
  $scope.geo = {};

  // jsonp es para obtener recursos externos
  $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK')
  .success(function(data){
    $scope.geo = data;
  });



}]);





})();
