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
        // }).
        // when('/login', {
        //   templateUrl: 'templates/createLinks.html',
        //   controller: 'loginController'
        // }).
        // when('/signup', {
        //   templateUrl: 'templates/createLinks.html',
        //   controller: 'loginController'
        }).
        otherwise({
          redirectTo: '/'
        });
  }]);
  // .run(function($rootScope, $location, Session){
  //   $rootScope.$on('$routeChangeStart', function(evt, nextURL, currentUrl){
  //     if(nextUrl.$$route.controller !== 'loginController' && !Session.isLoggedIn()){
  //       console.log("No Auth");
  //       $location.path('/login');

  //     }
  //   });
  // })
  // .factory('Session', function($q, $http){
  //   var service = {
  //     currentUser: null,
  //     isLoggedIn: function(){

  //     }
  //   };
  // });
