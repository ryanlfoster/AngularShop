'use strict';

angular.module('cmcShop.filters', [])
   .filter('groupBy', function() {
      return function(items, key) {
         var groups = {};
         for(var i = 0; i < items.length; i++) {
            if(!groups[items[i][key]]) {
               groups[items[i][key]] = [];
            };
            groups[items[i][key]].push(items[i][key]);
         };
         return groups;
      };
   });
