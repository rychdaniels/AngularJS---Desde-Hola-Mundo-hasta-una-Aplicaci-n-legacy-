var app = angular.module('universidadApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
	$scope.menuSuperior = 'parciales/menu.html';


	$scope.setActive = function(Opcion){

		$scope.mInicio     = "";
		$scope.mProfesores = "";
		$scope.mAlumnos    = "";

		$scope[Opcion] = "active";

	}

}]);

// Creamos nuestro filtro para el telefono
app.filter('telefono', function(){
	// Expresion regular para quitar los guiones con los que 
	// la api nos regresa los datos, la g es para hacerlo de 
	// de forma global
	var re = /-/g;
	return function(numero){
		var numeroLimpio = numero.replace(re,'');
		return numeroLimpio.substring(0,4) + "-"+numeroLimpio.substring(4);
	}
});
