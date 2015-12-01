app.controller('preguntasController', ['servicioPreguntas', 'servicioAreas', function (servicioPreguntas, servicioAreas) {
        console.log("preguntasController");
        var vm = this;
        vm.pregunta = {};
        vm.mostrar = function (algo) {
            if (algo === undefined) {
                algo = "";
            }
            console.log(algo);
        };
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
                        console.log('Error: ');
                        console.log(errorPl);
                    });
        };
        vm.preguntas = [];
        vm.areaSeleccionada = null;
        function cargarAreas() {
            var promiseGet = servicioAreas.getAll();
            promiseGet.then(
                    function (pl) {
                        console.log(pl);
                        var respuesta = pl.data;
                        vm.preguntas = respuesta.areas;
                        console.log(vm.preguntas);
                        //vm.gridOptions1.data = vm.areas;
                    },
                    function (errorPl) {
                        console.log('Error: ');
                        console.log(errorPl);
                    }
            );
        }
        cargarAreas();
        vm.preguntas = [];
        function loadPreguntas() {
            var promiseGet = servicioPreguntas.getAll();
            promiseGet.then(
                    function (pl) {
                        console.log(pl);
                        var respuesta = pl.data;
                        vm.preguntas = respuesta.preguntas;
                        vm.gridOptions.data = vm.preguntas;
                    },
                    function (errorPl) {
                        console.log('Error: ');
                        console.log(errorPl);
                    }
            );
        }
        loadPreguntas();
        vm.gridOptions = {
            paginationPageSizes: [10, 20, 30],
            paginationPageSize: 10,
            columnDefs: [
                {name: "Encabezado", field: "encabezado.DESCRIPCION"},
                {
                    name: "Imagen de encabezado",
                    cellTemplate: '<a href="">Ver imagen{{ row.entity.CODPREGUNTA }}</a>'
                },
                {name: "Enunciado", field: "ENUNCIADO"},
                {
                    name: "Imagen de enunciado"
                },
                {
                    name: "Opciones",
                    cellTemplate: '<a href="">Ver opciones {{row.entity.CODPREGUNTA}}</a>'
                }
            ],
            data: vm.preguntas
        };
    }]);

function transformValue(id) {
    console.log("tran", id);
    if (id % 2 === 0) {
        return '<a href="">Ver opciones {{row.entity.CODPREGUNTA}}</a>';
    } else {
        return '<a href="">Sin</a>';
    }
}