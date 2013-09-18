'use strict';


// Declare app level module which depends on filters, and services
angular.module('cmcShop', ['ui.bootstrap', 'cmcShop.controllers', 'cmcShop.services'])
   .config(['$routeProvider', function($routeProvider) {
      $routeProvider
         .when('/basket', { templateUrl: 'partials/basket.html', controller: 'BasketCtrl' })
         .when('/deliveryMethod', { templateUrl: 'partials/deliveryMethod.html', controller: 'DeliveryMethodCtrl' })
         .when('/complete', { templateUrl: 'partials/completion.html', controller: 'CompletionCtrl' })
         .otherwise({ redirectTo: '/basket' });
   }]);
