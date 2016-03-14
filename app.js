/**
 * Created by Mad Martigan on 3/3/2016.
 */
(function(){
    angular.module("teampUp", ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/splash', {
                templateUrl: 'splash.html'
            })
            .when('/login', {
                templateUrl: 'login.html',
                controller: 'extraStuff',
                controllerAs: 'es'
            })
            .when('/account', {
                templateUrl: 'account.html'
            })
            .when('/teams', {
                templateUrl: 'teams.html',
                controller: 'extraStuff',
                controllerAs: 'tc'
            })
            .otherwise({
                redirectTo: '/splash'
            })
    })

}());
