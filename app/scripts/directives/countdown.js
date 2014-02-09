'use strict';

angular.module('weddingApp')
  .directive('countdown', function () {
    return {
      restrict: 'A',

      link: function postLink(scope, element, attrs) {
          if(attrs.eventDate===undefined){
              throw new Error("Event date not defined");
              return false;
          }
          var targetDate = new Date(attrs.eventDate)
          element.countdown(
              {until: targetDate, format: 'dHMS'}
          );

      }
    };
  });
