app.config( function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'parciales/home.html'
    })
    .otherwise({
        redirectTo: '/'
    });
})