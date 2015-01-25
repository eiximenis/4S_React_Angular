
"use strict";

angular.module("beersApp.directives", [])
.directive('myBeer', function() {
  return {
    template: '<div><span>{{value.name}}</span><div rating score="value.score" max="10"></div><br />{{value.description}}</div>'
  };
}).directive("rating", function() {
  var directive = { };
  directive.restrict = 'AE';
  
  directive.scope = {
    score: '=score',
    max: '=max',
    value: '=ngModel'
  };

  directive.templateUrl = "components/templates/rating.html";

  directive.link = function(scope, elements, attr) {
    
    scope.updateStars = function() {
      var idx = 0;
      scope.stars = [ ];
      for (idx = 0; idx < scope.max; idx += 1) {
        scope.stars.push({
          full: scope.score > idx
        });
      }
    };
    
    scope.stopHover = function() {
      scope.hoverIdx = -1;
    };
    
    scope.starClass = function(/** Star */ star, /** Integer */ idx) {
      var starClass = 'fa-star-o';
      if (star.full || idx <= scope.hoverIdx) {
        starClass = 'fa-star';
      }
      return starClass;
    };
    
    scope.setRating = function(idx) {
      scope.score = idx + 1;
      scope.value = scope.score;
      scope.stopHover();
    };
    
    scope.$watch('score', function(newValue, oldValue) {
      if (newValue !== null && newValue !== undefined) {
        scope.updateStars();
      }
    });
  };
  
  return directive;
});