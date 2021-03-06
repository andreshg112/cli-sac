app.service("servicioPreguntas", function ($http) {
    var uri = "http://localhost/PHP/ar-sac/preguntas";
    this.get = function (id) {
        var req = $http.get(uri + "/" + id);
        return req;
    };
    this.getNoRespondida = function (email, codreto, codarea) {
        var req = $http.get("http://localhost/PHP/ar-sac/no-respondida?email="
                + email + "&codreto=" + codreto + "&codarea=" + codarea);
        return req;
    };
    this.getAll = function () {
        var req = $http.get(uri);
        return req;
    };
    this.post = function (registro) {
        var req = $http({
            method: 'POST',
            url: uri,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            data: registro
        });
        return req;
    };
    this.postRespondida = function (datos) {
        var req = $http({
            method: 'POST',
            url: "http://localhost/PHP/ar-sac/respondidas",
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            data: datos
        });
        return req;
    };
    this.put = function (id, contact) {
        /*var request = $http({
         method: "put",
         url: uri+'/api/contactos/'+ id,
         data: contact
         });*/
        var url = uri + "/" + id;
        var request = $http.put(url, contact);
        return request;
    };
});

app.service("servicioAreas", function ($http) {
    var uri = "http://localhost/PHP/ar-sac/areas";
    this.get = function (id) {
        var req = $http.get(uri + "/" + id);
        return req;
    };
    this.getAll = function () {
        var req = $http.get(uri);
        return req;
    };
    this.post = function (registro) {
        var req = $http({
            method: 'POST',
            url: uri,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            data: registro
        });
        return req;
    };
    this.put = function (id, contact) {
        /*var request = $http({
         method: "put",
         url: uri+'/api/contactos/'+ id,
         data: contact
         });*/
        var url = uri + "/" + id;
        var request = $http.put(url, contact);
        return request;
    };
});

app.service("servicioUsuarios", ['$http', function ($http) {
        var uri = "http://localhost/PHP/ar-sac/usuarios";
        this.get = function (id) {
            var req = $http.get(uri + "/" + id);
            return req;
        };
        this.getRetos = function (id) {
            var req = $http.get(uri + "/" + id + "/retos");
            return req;
        };
        this.getAll = function (filtro) {
            var req = $http.get(uri + "?limit=5&filtro=" + filtro);
            return req;
        };
        this.post = function (registro) {
            var req = $http({
                method: 'POST',
                url: uri,
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                },
                data: registro
            });
            return req;
        };
        this.iniciarSesion = function (datos) {
            console.log(datos);
            var req = $http({
                method: 'POST',
                url: uri + '/sesion',
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                },
                data: datos
            });
            return req;
        };
        this.put = function (id, contact) {
            var url = uri + "/" + id;
            var request = $http.put(url, contact);
            return request;
        };
    }]);

app.service("servicioRetos", function ($http) {
    var uri = "http://localhost/PHP/ar-sac/retos";
    this.get = function (id) {
        var req = $http.get(uri + "/" + id);
        return req;
    };
    this.getParticipantes = function (id) {
        var req = $http.get(uri + "/" + id + '/participantes');
        return req;
    };
    this.getAll = function () {
        var req = $http.get(uri);
        return req;
    };
    this.post = function (registro) {
        var req = $http({
            method: 'POST',
            url: uri,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            data: registro
        });
        return req;
    };
    this.put = function (id, contact) {
        var url = uri + "/" + id;
        var request = $http.put(url, contact);
        return request;
    };
});

app.service("servicioResultados", function ($http) {
    var uri = "http://localhost/PHP/ar-sac/resultados";
    this.get = function (id) {
        var req = $http.get(uri + "/" + id);
        return req;
    };
    this.getAll = function () {
        var req = $http.get(uri);
        return req;
    };
    this.post = function (registro) {
        var req = $http({
            method: 'POST',
            url: uri,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            data: registro
        });
        return req;
    };
    this.put = function (id, contact) {
        var url = uri + "/" + id;
        var request = $http.put(url, contact);
        return request;
    };
});