(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  
	$scope.profesores = {};

	// Variable que sirve para hacer el include del archivo con la 
	// tabla de todos los profesores, esta variable se inyecta en el html
	$scope.tblProfesores = 'parciales/tblProfesores.html';
  
  	$http.get('json/profesores.json').success(function(data){
  		//Codigo cuando es correcta la petición
  		$scope.profesores = data.profesores;

  	});



}]);





})();
