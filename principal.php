<!DOCTYPE html>
<html lang="en" ng-app="app">
    <head>
        <meta charset="UTF-8">
        <title>SaberApp_Cloud</title>
        <link rel="stylesheet" href="css/materialize.min.css">
        <link rel="stylesheet" href="css/estilos.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <style>
            .angular-google-map-container {
                width: 100%;
                height: 504px;
            }
        </style>

        <link href="lib/ionic/css/ionic.css" rel="stylesheet">
        <script src="lib/ionic/js/ionic.bundle.js"></script>
        <link href="http://code.ionicframework.com/ionicons/1.5.2/css/ionicons.min.css" rel="stylesheet">

    </head>
    <body>	 		
        <div  style="margin-top: -0.5rem; padding: 15px; background-color: #0072C6;">
            <h5 class="title center-align" style="color: #fff;"><b>SaberApp</b></label></h5>
        </div>
        <br><br><br><br>
    <ion-view style="" title="Tabs Controller">        

        </ion-view>	
        <div class="tab-nav tabs" style="background-color: #0c60ee;">
            <ion-tab style="" icon="ion-android-home" href="#/pestanas/retos"></ion-tab>
            <ion-tab style="" icon="ion-podium" href="#/pestanas/resultados"></ion-tab>
            <ion-tab style="" icon="ion-android-person" href="#/pestanas/perfil"></ion-tab>
            <a ng-class="{'tab-item-active': isTabActive(), 'has-badge':badge, 'tab-hidden':isHidden()}" ng-disabled="disabled()" class="tab-item tab-item-active" icon="ion-android-home">
                <!-- ngIf: badge --><!-- ngIf: getIconOn() && isTabActive() -->
                <i class="icon ion-android-home" ng-if="getIconOn() & amp; & amp; isTabActive()"></i>
                <!-- end ngIf: getIconOn() && isTabActive() --><!-- ngIf: getIconOff() && !isTabActive() -->
                <span class="tab-title ng-binding" ng-bind-html="title">Retos</span>
            </a>
            <a ng-class="{'tab-item-active': isTabActive(), 'has-badge':badge, 'tab-hidden':isHidden()}" ng-disabled="disabled()" class="tab-item" icon="ion-podium">
                <!-- ngIf: badge --><!-- ngIf: getIconOn() && isTabActive() --><!-- ngIf: getIconOff() && !isTabActive() -->
                <i class="icon ion-podium" ng-if="getIconOff() & amp; & amp; !isTabActive()"></i>
                <!-- end ngIf: getIconOff() && !isTabActive() -->
                <span class="tab-title ng-binding" ng-bind-html="title">Resultados</span>
            </a>
            <a ng-class="{'tab-item-active': isTabActive(), 'has-badge':badge, 'tab-hidden':isHidden()}" ng-disabled="disabled()" class="tab-item" icon="ion-android-person">
                <!-- ngIf: badge --><!-- ngIf: getIconOn() && isTabActive() --><!-- ngIf: getIconOff() && !isTabActive() -->
                <i class="icon ion-android-person" ng-if="getIconOff() & amp; & amp; !isTabActive()"></i>
                <!-- end ngIf: getIconOff() && !isTabActive() -->
                <span class="tab-title ng-binding" ng-bind-html="title">Perfil</span>
            </a>
        </div>
        <!--scripts -->
        <script type="text/javascript" src="scripts/jquery.min.js"></script>
        <script type="text/javascript" src="scripts/angular.min.js"></script>
        <script type="text/javascript" src="scripts/materialize.min.js"></script>
        <script type="text/javascript" src="scripts/angular-route.min.js"></script>
        <script type="text/javascript" src="Modules/appModule.js"></script>
        <script type="text/javascript" src="Controllers/competenciasController.js"></script>    

        <script type="text/javascript">
                            $(document).ready(function(){
                    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
                    $('.modal-trigger').leanModal();
                            $('select').material_select();
                    });
        </script>
    </body>
</html>