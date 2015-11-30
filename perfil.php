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
                <h5 class="title center-align" style="color: #fff;"><b>Perfil</b></label></h5>
            </div>
            <br>
            <center>
                <div class="row center" style="width:70%;">	                       
                    <br><br>
                    <center>          
                        <div class="card-action">
                            <ul class="collection">
                                <li class="collection-item left-align">
                                    <label>                                            
                                        <div class="row">
                                            <div class="input-field col s4">
                                                <center>
                                                    <div class="card-panel left-align" style="width:40%; height: 100px;">                         
                                                        <div class="row center" style="width:80%;">                                                          
                                                           .
                                                        </div>
                                                    </div>                                                    
                                                </center>
                                            </div>
                                            <div class="input-field col s6"> 
                                                <br>
                                                <h6>SaberApp Apencio</h6><br>
                                                <h6>Appoyamostusaber@gmail.com</h6>

                                            </div>
                                        </div>
                                    </label>
                                </li>
                                <li class="collection-item left-align">                                    
                                    <div class="row">                                           
                                        <div class="col s1"><label><h6>Email:</h6></label></div>
                                        <div class="col s8">
                                            <input  id="first_name" type="text" class="validate">
                                        </div>
                                    </div> 
                                </li>
                                <li class="collection-item left-align">
                                    <label>
                                        <div class="row">                                           
                                            <div class="col s1"><label><h6>Nombres:</h6></label></div>
                                            <div class="col s8">
                                                <input  id="first_name" type="text" class="validate">
                                            </div>
                                        </div>                                            
                                    </label>
                                </li>
                                <li class="collection-item left-align">
                                    <label>
                                        <div class="row">                                           
                                            <div class="col s1"><label><h6>Apellidos:</h6></label></div>
                                            <div class="col s8">
                                                <input  id="first_name" type="text" class="validate">
                                            </div>
                                        </div>                                            
                                    </label>
                                </li>
                                <li class="collection-item left-align">                                    
                                    <div class="row">                                           
                                        <div class="col s1"><label><h6>Sexo:</h6></label></div>
                                        <div class="col s8">
                                            <select name="sexo">
                                                <option value="0" disabled selected>Seleccionar sexo</option>
                                                <option value="masculino">M </option>
                                                <option value="femenino">F</option>        
                                            </select>
                                            <br>
                                        </div>
                                    </div>                                    
                                </li>
                                <label>
                                    <a class="waves-effect waves-light btn center-align" href="#" ng-click="#" style="background-color: #0072C6; width:97%;"><label style="color:#fff;">Guardar Cambios</label></a>
                                </label>
                            </ul>                                
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