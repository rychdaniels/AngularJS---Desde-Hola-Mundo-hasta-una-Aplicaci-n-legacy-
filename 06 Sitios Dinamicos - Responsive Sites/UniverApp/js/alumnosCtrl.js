app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mAlumnos");

	$scope.alumnos = {};

	// Traemos los arhivo de la BD
	$http.get('https://jsonplaceholder.typicode.com/users')
		.success(function(data){
			$scope.alumnos = data;
		});


}]);