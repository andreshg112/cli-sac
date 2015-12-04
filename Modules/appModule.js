var app = angular.module("app", ["ngRoute"]);
app.config(["$routeProvider",
    function ($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'view/saberapp.html',
                    controller: "retarController",
                    controllerAs: "vm"
                })
                .when('/Gestionar/Retos', {
                    templateUrl: 'view/saberapp.html',
                    controller: "retarController",
                    controllerAs: "vm"
                })
                .when('/Gestionar/Resultados', {
                    templateUrl: 'view/resultados.html',
                    controller: "resultadosController",
                    controllerAs: "vm"
                })
                .when('/Gestionar/Perfil', {
                    templateUrl: 'view/perfil.html',
                    controller: "perfilController",
                    controllerAs: "vm"
                })
                .when('/Comenzar/Reto', {
                    templateUrl: 'view/retar2.html',
                    controller: "usuariosController",
                    controllerAs: "vm"
                })
                .when('/Gestionar/Areas', {
                    templateUrl: 'view/retar1.html',
                    controller: "areasController",
                    controllerAs: "vm"
                })
                .when('/Realizar/Retos', {
                    templateUrl: 'view/area.html',
                    controller: "preguntasController",
                    controllerAs: "vm"
                })
    }]);