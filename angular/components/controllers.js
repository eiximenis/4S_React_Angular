"use strict";

angular.module("beersApp.controllers", []).controller('beerCtrl', ['$scope', function($scope) {
    $scope.beers = Model;
    $scope.newBeer = { };

    $scope.update = function(beer) {
        $scope.beers.push({
          name : beer.name,
          description : beer.description,
          score : beer.score,
        });
        $scope.newBeer.name = "";
        $scope.newBeer.description = "";
        $scope.newBeer.score = 0;
      };
}])
