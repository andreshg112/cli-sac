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
                <h5 class="title center-align" style="color: #fff;"><b>¡Retar!</b></label></h5>
            </div>
            <br><br>
            <center>                                       
                    <div class="row center" style="width:70%;">	                      
                        <br><br>	
                        <div class="card" style="background-color: #f5f5f5;">
                            <div class="card-image">
                                <label class="center-align" style="background-color: #f5f5f5;"><h5>&nbsp;&nbsp;Seleccione El &Aacute;rea</h5></label>             
                            </div> 
                            <center>          
                                <div class="card-action" style="padding:0px !important; border-top:0px solid rgba(160,160,160,0.2);">
                                    <ul class="collection">
                                        <li class="collection-item center-align"><label><h6>Lectura Critica</h6></label></li>
                                        <li class="collection-item center-align"><label><h6>Matematicas</h6></label></li>
                                        <li class="collection-item center-align"><label><h6>Ciencias Sociales y Competencias Ciudadanas</h6></label></li>
                                        <li class="collection-item center-align"><label><h6>Ciencias Naturales</h6></label></li>
                                        <li class="collection-item center-align"><label><h6>Ingles</h6></label></li>                                        
                                    </ul>
                                </div>
                            </center>
                        </div>                         
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
                                    Â© 2015 Copyright 
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