'use strict';


// Declare app level module which depends on filters, and services
angular.module('cmcShop', ['ui.bootstrap', 'cmcShop.controllers'])
   .factory('Products', function() {
      var products = [{
            id: 1,
            image: 'http://placekitten.com/200/200',
            text: 'More Cats',
            price: 60
         }, {
            id: 2,
            image: 'http://placekitten.com/300/200',
            text: 'Extra Kittys',
            price: 90
         }, {
            id: 3,
            image: 'http://placekitten.com/400/200',
            text: 'Lots Of Felines',
            price: 75
         }];
      products.type = 'Kitten';
      return products;
   })
   .factory('DeliveryMethods', function() {
      return [{
         type: 'Collect',
         price: 0
      }, {
         type: 'Courier',
         price: 25
      }];
   })
   .factory('Basket', function($rootScope) {
      var items = [];
      var deliveryMethod;

      var Basket = {
         ITEM_ADDED: 'item_added',
         add: function(item) {
            items.push(item);
            $rootScope.$broadcast(Basket.ITEM_ADDED);
         },
         getItems: function() {
            return items;
         },
         setDeliveryMethod: function(method) {
            deliveryMethod = method;
         },
         getDeliveryMethod: function() {
            return deliveryMethod;
         }
      };

      return Basket;
   })
   .config(['$routeProvider', function($routeProvider) {
      $routeProvider
         .when('/basket', { templateUrl: 'partials/basket.html', controller: 'BasketCtrl' })
         .when('/deliveryMethod', { templateUrl: 'partials/deliveryMethod.html', controller: 'DeliveryMethodCtrl' })
         .when('/complete', { templateUrl: 'partials/completion.html', controller: 'CompletionCtrl' })
         .otherwise({ redirectTo: '/basket' });
   }]);
