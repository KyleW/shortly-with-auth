angular.module('myApp', ['ngRoute','myControllers'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'templates/viewLinks.html',
          controller: 'viewLinks'
        }).
        when('/add', {
          templateUrl: 'templates/createLinks.html',
          controller: 'createLinks'
        }).
        otherwise({
          redirectTo: '/'
        });
  }]);
