var app = angular.module('promesaApp.controladores', []);

app.controller('mainCtrl', ['$scope', '$q', function($scope, $q){
	
	$scope.miVar = 0;


	$scope.sumar = function( num ){

		// El objeto $q nos permite hacer peticiones asincronas
		var q = $q.defer(); // defer es algo que ya ha pasado y lo que pasando es una repeticion
		var valido = false;

		num ++;

		setTimeout(function() {

			if( valido ){

				q.resolve( num )

			}else{

				q.reject( 'No se sumar' );

			}
			
		}, 2000);


		return q.promise; // Siempre que usemos el objeto $q es muy recomendable retornar la promesa

	}



	$scope.promise = $scope.sumar( 1 );
	// then procesa si la promesa se cumplio o no
	$scope.promise.then( 
		// Cuando la promesa se cumple correctamente
		function( valor ){
			console.log("Promesa cumplida");
			$scope.miVar = valor;

		}, 
		// Cuando la promesa no se cumple
		function( error ){
			console.error( error );
			$scope.miVar = "Error!!!!";

		});





}]);
