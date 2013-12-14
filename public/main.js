angular.module('myApp', [])
  .controller('viewLinks', function($scope, $http) {
    $http({
      method: "GET",
      url: "http://localhost:4567/links"
    }).success(function(data){
      console.log(data);
      $scope.links = data;
            // Resolve the cross origin issue
    });
  }).controller('createLinks', function($scope, $http) {
    $scope.submit = function() {
      var temp ={url: $scope.newURL};
      // debugger;
      // if (this.newUrl) {
        // console.log(JSON.stringify(temp));
        $http({
          method: "POST",
          url: "http://localhost:4567/links",
          headers: {'Content-Type': 'application/json'},
          data: JSON.stringify(temp)
        }).then(function(){
          console.log("sent in a new link.")
          $scope.newURL="";
        })
      // }
    };
  });
