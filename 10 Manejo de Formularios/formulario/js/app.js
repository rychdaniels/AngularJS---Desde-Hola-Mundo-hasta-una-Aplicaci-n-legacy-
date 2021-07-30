var app = angular.module('bonusApp',[ ]);

app.controller('mainCtrl', ['$scope', function($scope){
    
    $scope.formData = {};
    $scope.guardarDatos = function( esValido ) {

        if( !esValido ){
            return;
        }

        console.log('');
        
    };


	
}]);
