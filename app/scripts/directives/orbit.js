'use strict';

angular.module('weddingApp')
  .directive('orbit', function () {
    return {      
    	replace:false,
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.foundation('orbit', 
        	{
        		slide_number: false,
        		bullets: false,
        		navigation_arrows: false,
        		timer_speed: 1000,
        		animation: 'fade',
        		animation_speed: 750
        	}
        	);
      }
    };
  });
