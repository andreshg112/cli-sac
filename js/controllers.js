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
                            localStorage.usuario = respuesta.usuario;
                            location.href = "index.html";
                        }
                    },
                    function (errorPl) {
                        console.log('Error en la solicitud: ', errorPl);
                    });
        };

    }]);