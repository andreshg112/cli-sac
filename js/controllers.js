app.controller('loginController', ['servicioUsuarios', function (servicioUsuarios) {
        var vm = this;
        vm.datos = {};
        vm.iniciarSesion = function () {
            console.log(vm.datos);
            var promisePost = servicioUsuarios.iniciarSesion(vm.datos);
            promisePost.then(
                    function (pl) {
                        var respuesta = pl.data;
                        console.log(respuesta);
                        alert(respuesta.mensaje);
                        if (respuesta.result == 1) {
                            localStorage.usuario = JSON.stringify(respuesta.usuario);
                            location.href = "index.html";
                        }
                    },
                    function (errorPl) {
                        console.log('Error en la solicitud: ', errorPl);
                    });
        };

    }]);

app.controller('retoController', ['servicioUsuarios', 'servicioAreas', function (servicioUsuarios, servicioAreas) {
        var vm = this;
        vm.datos = {};
        //vm.areas = [];
        vm.iniciarSesion = function () {
            console.log(vm.datos);
            var promisePost = servicioUsuarios.iniciarSesion(vm.datos);
            promisePost.then(
                    function (pl) {
                        var respuesta = pl.data;
                        console.log(respuesta);
                        alert(respuesta.mensaje);
                        if (respuesta.result == 1) {
                            localStorage.usuario = JSON.stringify(respuesta.usuario);
                            location.href = "index.html";
                        }
                    },
                    function (errorPl) {
                        console.log('Error en la solicitud: ', errorPl);
                    });
        };
        /*function cargarAreas() {
         var promiseGet = servicioAreas.getAll();
         promiseGet.then(
         function (pl) {
         console.log(pl);
         var respuesta = pl.data;
         vm.areas = respuesta.areas;
         console.log(vm.areas);
         },
         function (errorPl) {
         console.log('Error en la solicitud: ', errorPl);
         }
         );
         }
         cargarAreas();*/
    }]);

app.controller('areasController', ['servicioAreas', 'servicioRetos', function (servicioAreas, servicioRetos) {
        var vm = this;
        vm.areas = [];
        function cargarAreas() {
            var promiseGet = servicioAreas.getAll();
            promiseGet.then(
                    function (pl) {
                        console.log(pl);
                        var respuesta = pl.data;
                        vm.areas = respuesta.areas;
                        console.log(vm.areas);
                    },
                    function (errorPl) {
                        console.log('Error en la solicitud: ', errorPl);
                    }
            );
        }
        cargarAreas();
        vm.almacenarEnSesion = function (dato) {
            console.log(dato);
            sessionStorage.codarea = dato.CODAREA;
            var reto = {
                email: JSON.parse(localStorage.usuario).EMAIL,
                codarea: sessionStorage.codarea,
                nomreto: "Reto de " + dato.NOMAREA,
                participantes: [
                    {email: JSON.parse(localStorage.usuario).EMAIL},
                    {email: sessionStorage.email_2}
                ]
            };
            registrarReto(reto);
        };
        function registrarReto(reto) {
            var promisePost = servicioRetos.post(reto);
            promisePost.then(
                    function (pl) {
                        var respuesta = pl.data;
                        console.log(respuesta.reto);
                        sessionStorage.codreto = respuesta.reto.CODRETO;
                        sessionStorage.nomreto = respuesta.reto.NOMRETO;
                        location.href = '#/Realizar/Retos';
                    },
                    function (errorPl) {
                        console.log('Error: ', errorPl);
                        alert("Error conectando al servidor");
                    });
        }
        ;
    }]);

app.controller('usuariosController', ['servicioUsuarios', function (servicioUsuarios) {
        var vm = this;
        vm.usuarios = [];
        vm.filtro = "";
        vm.cargarUsuarios = function () {
            vm.usuarios = [];
            var promiseGet = servicioUsuarios.getAll(vm.filtro);
            promiseGet.then(
                    function (pl) {
                        console.log(pl);
                        var respuesta = pl.data;
                        vm.usuarios = respuesta.usuarios;
                        console.log(vm.usuarios);
                    },
                    function (errorPl) {
                        console.log('Error en la solicitud: ', errorPl);
                    }
            );
        };
        vm.cargarUsuarios();
        vm.almacenarEnSesion = function (dato) {
            console.log(dato);
            sessionStorage.email_2 = dato.EMAIL;
            location.href = "#/Gestionar/Areas";
        };
    }]);

app.controller('preguntasController', ['servicioPreguntas', function (servicioPreguntas) {
        var vm = this;
        vm.pregunta = {};
        vm.registrar = function (pregunta) {
            var promisePost = servicioPreguntas.post(pregunta);
            vm.mostrar(promisePost);
            promisePost.then(
                    function (pl) {
                        var respuesta = pl.data;
                        console.log(respuesta);
                        alert(respuesta.mensaje);
                    },
                    function (errorPl) {
                        console.log('Error: ', errorPl);
                    });
        };
        function cargarPregunta() {
            var promiseGet =
                    servicioPreguntas.getNoRespondida(JSON.parse(localStorage.usuario).EMAIL, sessionStorage.codreto, sessionStorage.codarea);
            promiseGet.then(
                    function (pl) {
                        console.log(pl);
                        var respuesta = pl.data;
                        vm.pregunta = respuesta.pregunta;
                        console.log(vm.pregunta);
                    },
                    function (errorPl) {
                        console.log('Error: ', errorPl);
                    }
            );
        }
        cargarPregunta();
        vm.responder = function(opcion) {
            
        };
    }]);