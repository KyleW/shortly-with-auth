angular
.module('myApp', [])
.controller('myController', function($scope, $http) {
  $scope.working="Here's where some links will go";
  $http({
    method: "GET",
    url: "http://localhost:4567/links"
  }).success(function(data){
    console.log(data);
    $scope.links = data;
        // Resolve the cross origin issue
      })
});