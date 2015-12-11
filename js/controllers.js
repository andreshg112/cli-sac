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

app.controller('retoController', ['servicioUsuarios', function (servicioUsuarios) {
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
        vm.respondio = false;
        vm.cargarPregunta = function () {
            vm.pregunta = {};
            var promiseGet =
                    servicioPreguntas.getNoRespondida(JSON.parse(localStorage.usuario).EMAIL, sessionStorage.codreto, sessionStorage.codarea);
            promiseGet.then(
                    function (pl) {
                        console.log(pl);
                        var respuesta = pl.data;
                        vm.pregunta = respuesta.pregunta;
                          shuffleArray(vm.pregunta.opciones);
                        console.log(vm.pregunta);
                    },
                    function (errorPl) {
                        console.log('Error: ', errorPl);
                    }
            );
            vm.respondio = false;
        };
        var shuffleArray = function (array) {
            var m = array.length, t, i;

            // While there remain elements to shuffle
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }

            return array;
        };
        vm.cargarPregunta();
        vm.responder = function (opcion) {
            if (!vm.respondio) {
                vm.respondio = true;
                if (opcion.VALIDEZ === "INCORRECTA") {
                    $('#' + opcion.CODOPCION).css("box-shadow", "1px 1px 1px 3px red");
                    $('#d' + opcion.CODOPCION).addClass("cross");
                    $('#d' + opcion.CODOPCION).text("X");
                } else {
                    $('#d' + opcion.CODOPCION).addClass("checkmark");
                    $('#d' + opcion.CODOPCION).html("&#10004;");
                }
                for (var i = 0; i < vm.pregunta.opciones.length; i++) {
                    var opcion1 = vm.pregunta.opciones[i];
                    if (opcion1.VALIDEZ === "CORRECTA") {
                        $('#' + opcion1.CODOPCION).css("box-shadow", "1px 1px 1px 3px green");
                    }
                }
                var datos = {
                    codreto: sessionStorage.codreto,
                    codpregunta: vm.pregunta.CODPREGUNTA,
                    email: JSON.parse(localStorage.usuario).EMAIL,
                    opcion: opcion
                };
                var promisePost = servicioPreguntas.postRespondida(datos);
                promisePost.then(
                        function (pl) {
                            var respuesta = pl.data;
                            if (respuesta.termino) {
                                alert("Has terminado de responder el reto.\n\
Espera a tus compañeros.");
                                location.href = '#/Gestionar/Retos';
                            }
                            console.log(respuesta);
                        },
                        function (errorPl) {
                            console.log('Error: ', errorPl);
                        });
            }

        };
    }]);

app.controller('retarController', ['servicioUsuarios', 'servicioRetos', function (servicioUsuarios, servicioRetos) {
        var vm = this;
        vm.terminados = [];
        vm.responde = [];
        vm.participantes = [];
        vm.tipoReto = '';
        vm.retoSeleccionado = {};
        function cargarRetos() {
            var promise = servicioUsuarios.getRetos(JSON.parse(localStorage.usuario).EMAIL);
            promise.then(
                    function (pl) {
                        var respuesta = pl.data;
                        vm.terminados = respuesta.terminados;
                        vm.responde = respuesta.responde;
                    },
                    function (errorPl) {
                        console.log('Error en la solicitud: ', errorPl);
                    }
            );
        }
        cargarRetos();
        vm.mostrar = function (dato) {
            console.log(dato);
        };
        vm.cargarParticipantes = function (reto, tipoReto) {
            vm.tipoReto = tipoReto;
            vm.participantes = [];
            vm.retoSeleccionado = reto;
            console.log(reto);
            var promise = servicioRetos.getParticipantes(vm.retoSeleccionado.CODRETO);
            promise.then(
                    function (pl) {
                        var respuesta = pl.data;
                        vm.participantes = respuesta.participantes;
                    },
                    function (errorPl) {
                        console.log('Error en la solicitud: ', errorPl);
                    }
            );
        };
        vm.continuarReto = function () {
            sessionStorage.codreto = vm.retoSeleccionado.CODRETO;
            sessionStorage.codarea = vm.retoSeleccionado.CODAREA;
            location.href = '#/Realizar/Retos';
        };
    }]);

app.controller('resultadosController', ['servicioResultados', function (servicioResultados) {
        var vm = this;
        vm.correctas = 0;
        vm.incorrectas = 0;
        vm.total = 0;
        vm.resultados = [];
        cargarResultados = function () {
            vm.usuarios = [];
            var promise = servicioResultados.get(JSON.parse(localStorage.usuario).EMAIL);
            promise.then(
                    function (pl) {
                        var respuesta = pl.data;
                        vm.correctas = respuesta.correctas;
                        vm.incorrectas = respuesta.incorrectas;
                        vm.total = vm.correctas + vm.incorrectas;
                        vm.resultados = respuesta.resultados;
                    },
                    function (errorPl) {
                        console.log('Error en la solicitud: ', errorPl);
                    }
            );
        };
        cargarResultados();
        vm.almacenarEnSesion = function (dato) {
            console.log(dato);
            sessionStorage.email_2 = dato.EMAIL;
            location.href = "#/Gestionar/Areas";
        };
    }]);

app.controller('perfilController', [function () {
        var vm = this;
        vm.usuario = JSON.parse(localStorage.usuario);
    }]);