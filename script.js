'use strict';

angular.module('heimdall', [])
  .constant("TEST", {
    "API_URL": "https://shrouded-peak-6388.herokuapp.com/data"
  })
  .factory('Data', function($http, TEST) {
    return {
      getData: function() {
        return $http.get(TEST.API_URL);
      }
    }
  })

.controller('MainCtrl', function($scope, Data) {
  $scope.test = "highlight";
  Data.getData().success(function(data) {
    $scope.json = data.data;
    $scope.singleObj = data.data[0];
    console.log($scope.highlightclass);
  });
});
