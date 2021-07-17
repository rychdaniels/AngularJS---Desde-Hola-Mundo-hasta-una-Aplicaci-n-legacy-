(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  //http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK
	$scope.clima = {};

	$http.jsonp('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK&appid=9f50a805aa0089a1edd1829a5db029f0')
		.success(function(data){
			$scope.clima = data;

		});
	
	/**
	 * Funcio que convierte de grados Celcius a grados Kelvin
	 */
	$scope.kelvinToCelcius = function(kelvin) {
		var celcius = kelvin - 273.15;
		// Redondeamos el valor
		celcius = Math.round( celcius * 100 ) / 100;
		return celcius;
	};

}]);


})();
