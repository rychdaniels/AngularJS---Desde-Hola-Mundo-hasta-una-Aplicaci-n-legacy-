
// jcs-autoValidate: Permite hacer validciones de formularios sin incluir 
// demasiada logia en el html
var app = angular.module('bonusApp',[ 'jcs-autoValidate' ]);

// Error personalizado para la edad
angular.module('bonusApp')
    .run([
    'defaultErrorMessageResolver',
    function (defaultErrorMessageResolver) {
        // passing a culture into getErrorMessages('fr-fr') will get the culture specific messages
        // otherwise the current default culture is returned.
        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
          errorMessages['edadMinima'] = 'Debe ser mayor a {0} años de edad';
          errorMessages['edadMaxima'] = 'Debe ser menor a {0} años de edad';
        });
    }
]);

app.controller('mainCtrl', ['$scope', function($scope){

	$scope.formData = {};


	$scope.guardar_datos = function( valido ){

		console.log("Posteando...");


	}


	
}]);
