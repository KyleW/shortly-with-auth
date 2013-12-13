angular
  .module('myApp', [])
  .controller('myController', function($scope, $http) {
    // $scope.links="Here's where some links will go";
    $http({
      method: "GET",
      url: "127.0.0.1:4567/links"
    }).success(function(data){
      console.log(data);
      $scope.links = data;
      // Resolve the cross origin issue
    })
  });
