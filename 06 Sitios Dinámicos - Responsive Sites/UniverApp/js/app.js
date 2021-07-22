var app = angular.module('universidadApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
    // Variable para incluir el template del menu de navegacion
    $scope.menuSuperior = 'parciales/menu.html';

}]);