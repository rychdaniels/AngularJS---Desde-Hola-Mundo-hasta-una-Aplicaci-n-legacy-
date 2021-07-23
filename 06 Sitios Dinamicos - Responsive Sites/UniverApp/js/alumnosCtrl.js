app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mAlumnos");

	$scope.alumnos = {};
	$scope.posicion = 5;

	// Traemos los arhivo de la BD
	$http.get('https://jsonplaceholder.typicode.com/users')
		.success(function(data){
			$scope.alumnos = data;
		});

	/**
	 * Funcion que nos lleva a la siguiente pagina
	 */
	$scope.siguientes = function(){

		if( $scope.alumnos.length > $scope.posicion ){
			$scope.posicion += 5
		}
	};

	/**
	 * Funcion que regresa a la pagina anterior
	 */
	$scope.anteriores = function(){
		if( $scope.posicion > 5 ){
			$scope.posicion -= 5
		}
	};


}]);