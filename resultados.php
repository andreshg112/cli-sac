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
                <h5 class="title center-align" style="color: #fff;"><b>Resultados</b></label></h5>
            </div>
            <br><br>
            <center>                                       
                <div class="row center" style="width:70%;">	                      
                    <br><br>	
                    <div class="card" style="background-color: #f5f5f5;">
                        <div class="card-image">
                            <label class="center-align" style="background-color: #f5f5f5;"><h5 style="color: #000000;">&nbsp;&nbsp;Respondidas</h5></label>             
                        </div> 
                        <center>          
                            <div class="card-action" style="padding:0px !important; border-top:0px solid rgba(160,160,160,0.2);">
                                <ul class="collection">                                    
                                    <li class="collection-item left-align"><label><h6 style="color: #000000;">Correctas:40:40%</h6></label></li>
                                    <li class="collection-item left-align"><label><h6 style="color: #000000;">Incorrectas:60:60%</h6></label></li>                                                                     
                                </ul> 
                                <label class="left-align"><h6 style="color: #000000;">&nbsp;&nbsp;&nbsp;&nbsp;Total:100</h6></label>
                            </div>
                        </center>
                    </div> 
                    <div class="card">
                        <div class="card-image">
                            <label class="center-align" style="background-color: #f5f5f5;"><h5 style="color: #000000;">&nbsp;&nbsp;Grafica</h5></label>             
                        </div> 
                        <center>          
                            <div id="canvas-holder">
                                <canvas id="chart-area3" width="600" height="300"></canvas>
                            </div>
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
<script src="Chart.js"></script>
<script>
    var barChartData = {
        labels: ["MATEMATICAS", "QUIMICA", "BIOLOGIA", "GEOGRAFIA", "SOCIALES", "ESTADISTICA", "FISICA"],
        datasets: [
            {
                fillColor: "#00e676",
                strokeColor: "#ffffff",
                highlightFill: "#1864f2",
                highlightStroke: "#ffffff",
                data: [90, 30, 10, 80, 15, 5, 15]
            },
            {
                fillColor: "#f44336",
                strokeColor: "#ffffff",
                highlightFill: "#ee7f49",
                highlightStroke: "#ffffff",
                data: [40, 50, 70, 40, 85, 55, 15]
            }
        ]

    }
    var ctx3 = document.getElementById("chart-area3").getContext("2d");
    window.myPie = new Chart(ctx3).Bar(barChartData, {responsive: true});
</script>
</body>
</html>