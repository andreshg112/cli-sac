angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.saberApp', {
      url: '/retos',
      views: {
        'tab1': {
          templateUrl: 'templates/saberApp.html',
          controller: 'saberAppCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.resultados', {
      url: '/resultados',
      views: {
        'tab2': {
          templateUrl: 'templates/resultados.html',
          controller: 'resultadosCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.perfil', {
      url: '/perfil',
      views: {
        'tab3': {
          templateUrl: 'templates/perfil.html',
          controller: 'perfilCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/pestanas',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('¡Retar!', {
      url: '/retar1',
      templateUrl: 'templates/¡Retar!.html',
      controller: '¡Retar!Ctrl'
    })
        
      
    
      
        
    .state('¡Retar!2', {
      url: '/retar2',
      templateUrl: 'templates/¡Retar!2.html',
      controller: '¡Retar!2Ctrl'
    })
        
      
    
      
        
    .state('ÁRea', {
      url: '/pregunta',
      templateUrl: 'templates/ÁRea.html',
      controller: 'ÁReaCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/pestanas/retos');

});