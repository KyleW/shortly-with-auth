angular
  .module('myApp', [])
  .controller('viewLinks', function($scope, $http) {
    $http({
      method: "GET",
      url: "http://localhost:4567/links"
    }).success(function(data){
      console.log(data);
      $scope.links = data;
            // Resolve the cross origin issue
    })
  })
  .controller('createLinks', function($scope, $http) {
    $scope.newLink = function(){
      $http({
      method: "POST",
      url: "http://localhost:4567/links"
      data:
    })
  });
