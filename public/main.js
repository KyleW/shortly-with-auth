angular.module('myApp', ['ngRoute','myControllers'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('#view', {
          templateUrl: 'templates/createLinks.html',
          controller: 'createLinks'
        }).
        when('#add', {
          templateUrl: 'templates/addLinks.html',
          controller: 'viewLinks'
        }).
        otherwise({
          redirectTo: '/'
        });
  }]);
