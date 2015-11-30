<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
        <title>SaberApp_Cloud</title>
        <link rel="stylesheet" href="css/materialize.min.css">
        <link rel="stylesheet" href="css/estilos.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    </head>
    <body style="background-color: #fafafa;">
        <main>
            <div  style="margin-top: -0.5rem; padding: 15px; background-color: #0072C6;">
                <h5 class="title center-align" style="color: #fff;"><b>Area</b></label></h5>
            </div>
            <br>
            <center>                                       
                <div class="row center" style="width:70%;">	                      
                    <br><br>
                    <center>
                        <div class="card-panel" style="width:70%; height: 200px;">                         
                            <div class="row center" style="width:80%;">
                                <br>
                                pregunta
                            </div>
                        </div>
                        <a href="resultados.php"></a>
                    </center>
                </div>
                <div class="row center" style="width:70%;">                   
                    <center>
                        <div class="card-panel" style="width:70%; height: 40px;">                         
                            <div class="row center" style="width:80%; height: 10px;">					
                                <label>opcion1</label>
                            </div>
                        </div>
                    </center>
                </div>
                <div class="row center" style="width:70%;">	
                    <center>
                        <div class="card-panel" style="width:70%; height: 30px;">                         
                            <div class="row center" style="width:80%; height: 10px;">					
                                <label>opcion1</label>
                            </div>
                        </div>
                    </center>
                </div>
                <div class="row center" style="width:70%;">	
                    <center>
                        <div class="card-panel" style="width:70%; height: 30px;">                         
                            <div class="row center" style="width:80%; height: 10px;">					
                                <label>opcion1</label>
                            </div>
                        </div>
                    </center>
                </div>
                <br>					
                </div>
            </center>
        </main>
    </div>
    <!--
    <footer class="page-footer"  style=" background-color: #eeeeee; !important">		
                    <div class="footer-copyright">
                            <div class="container" style="color:#0072C6;">
                                    © 2015 Copyright 
                                    <a class="text-lighten-4 right" href="#!" style="color:#0072C6;">Appoyamos tu saber</a>
                            </div>
                    </div>
            </footer-->
    <script type="text/javascript" src="scripts/jquery.min.js"></script>
    <script type="text/javascript" src="scripts/angular.min.js"></script>
    <script type="text/javascript" src="scripts/materialize.min.js"></script>
    <script type="text/javascript" src="scripts/angular-route.min.js"></script>
    <script type="text/javascript" src="Modules/appModule.js"></script>
    <script type="text/javascript" src="Controllers/competenciasController.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $('select').material_select();
        });
    </script>
</body>
</html>