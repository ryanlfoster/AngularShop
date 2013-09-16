'use strict';


// Declare app level module which depends on filters, and services
angular.module('cmcShop', ['ui.bootstrap', 'cmcShop.controllers'])
   .config(function($provide) {
      $provide.value('products', function() {
         var products = [{
               image: 'http://placekitten.com/200/200',
               text: 'More Cats'
            }, {
               image: 'http://placekitten.com/300/200',
               text: 'Extra Kittys'
            }, {
               image: 'http://placekitten.com/400/200',
               text: 'Lots Of Felines'
            }];
         products.type = 'Kitten';
         return products;
      });
   });
