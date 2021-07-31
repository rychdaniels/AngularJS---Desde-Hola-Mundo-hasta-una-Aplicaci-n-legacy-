var app = angular.module('paginacionApp.controladores',[]);

app.controller('observadorCtrl', ['$scope', function ($scope) {
    $scope.nombre = "Ricardo";

    // watch recibe el nombre de la variable a la cual queremos observar
    // y tambien la funcion que queremos ejecutar cuando la variable cambie

    $scope.$watch('nombre', function(valorNuevo, valorViejo){
        console.log(valorNuevo, valorViejo);
        
    });

}]);