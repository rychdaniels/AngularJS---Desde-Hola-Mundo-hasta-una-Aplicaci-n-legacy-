// Aqui se declaran los modulos o configuraciones principales para toda la aplicacion
var app = angular.module('universidadAPP', []);

// Controladores

// Este conbtrolador se encargara unicamente de todo lo relacionado con los profesores
app.controller('profesorCtrl', function($scope){

    // Referenciamos el objeto a una variable para este controlador con ayuda de $scope
    $scope.profesor = profesorData;

    // Variable que guradara los datos para despues mostrarlos
    $scope.editando = {};

    // Funcion para editar los datos del profesor
    $scope.editarProfesor = function(){
        // Con ayuda de angular copiamos los datos en $scope.editando
        angular.copy( $scope.profesor, $scope.editando );
    };

    $scope.guardarCambios = function(){
        // Copia los valores de editando en profesor
        angular.copy( $scope.editando, $scope.profesor );

    };

    $scope.cancelarCambios = function() {
        $scope.editando = {};
    };
});

var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}