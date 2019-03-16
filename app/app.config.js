(function(){
    'use strict';

    angular
        .module('bass-front-end')
        .config(function ($stateProvider, $urlRouterProvider) {
            var appState = {
                abstract: true,
                name: 'app',
                url: '/app',
                templateUrl: 'app.html',
                controller: 'AppCtrl',
                controllerAs: 'vm'
            }

            $stateProvider.state(appState);
        })
    
})();