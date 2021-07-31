var app = angular.module('promesaApp.servicios', []);

// Con $rootScope accedemos al $scope del controlador que llamo al servicio
app.factory('Personas', ['$http', '$q', '$rootScope', function($http, $q, $rootScope){
    var self = {
        "cargando": false,
        "mensaje": '',
        "data": []
    }

    // Agregamos un nuevo funcion al objeto
    self.cargarData = function(){
        self.cargando = true;

        // Haremos que se a asincrono y manejaremos las promesas
        var q = $q.defer();

        // jsonp permite acceder a data desde una url externa
        $http.jsonp('https://www.json-generator.com/api/json/get/bVjAuVNsEi?callback=JSON_CALLBACK')
        .then(
            // Si lo hace bien
            function success(data){
              
                // Con ayuda del objeto q le decimos a Angularjs que ya hemos traido los datos
                q.resolve(data.data);
                
        },  
        function( error ){ // Si lo hace mal
            console.log('Ocurrio un error al traer los datos');
            q.reject('Ocurrio un error al traer los datos'); // Si hubo error al traer los datos

            
        });

        // Debemos regresar el promise ya que estmos usando el objeto $q, de lo contrario
        // nos dara un error de no poder a aceeder a algo que es undefined
        return q.promise;
    };

    $rootScope.promesa = self.cargarData();
    // Creamos la promesa
    $rootScope.promesa.then( 
        function(data){// Si todo estuvo bien
            self.data = data;
            self.mensaje = "Información cargada correctamente";
            self.cargando = false;
        }, 
        function(error){// Si hubo algun error
            self.cargando = false;
            self.mensaje = "Hubo un error al cargar los datos";
        } 
    );


    return self;
}]);