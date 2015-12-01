var app = angular.module("app", ["ngRoute"]);
app.config(["$routeProvider",
    function ($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'view/saberapp.html',
                    controller: "competenciasController",
                    controllerAs: "vm"
                })
                .when('/Gestionar/Retos', {
                    templateUrl: 'view/saberapp.html',
                    controller: "competenciasController",
                    controllerAs: "vm"
                })
                .when('/Gestionar/Resultados', {
                    templateUrl: 'view/resultados.html',
                    controller: "competenciasController",
                    controllerAs: "vm"
                })
                .when('/Gestionar/Perfil', {
                    templateUrl: 'view/perfil.html',
                    controller: "competenciasController",
                    controllerAs: "vm"
                })
                .when('/Comenzar/Reto', {
                    templateUrl: 'view/retar2.html',
                    controller: "competenciasController",
                    controllerAs: "vm"
                })
                .when('/Gestionar/Retos', {
                    templateUrl: 'view/saberapp.html',
                    controller: "competenciasController",
                    controllerAs: "vm"
                })
                .when('/Gestionar/Areas', {
                    templateUrl: 'view/retar1.html',
                    controller: "competenciasController",
                    controllerAs: "vm"
                })
                .when('/Realizar/Retos', {
                    templateUrl: 'view/area.html',
                    controller: "competenciasController",
                    controllerAs: "vm"
                })
    }]);