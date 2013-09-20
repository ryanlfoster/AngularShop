'use strict';

angular.module('cmcShop.services', [])
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
   .factory('Order', ['$rootScope', 'DeliveryMethods', function($rootScope, DeliveryMethods) {
      function Item(product) {
         this.id = product.id;
         this.price = product.price;
         this.text = product.text;
         this.quantity = 1;
      };

      Item.prototype.incrementQuantity = function() {
         this.quantity++;
         $rootScope.$broadcast(order.TOTAL_CHANGED);
      };

      Item.prototype.decrementQuantity = function() {
         this.quantity > 1 && this.quantity--;
         $rootScope.$broadcast(order.TOTAL_CHANGED);
      };

      var items = {};
      var deliveryMethod = DeliveryMethods[0]

      var order = {
         ITEM_ADDED: 'item_added',
         TOTAL_CHANGED: 'total_changed',
         CANCELLED: 'cancelled',
         addItem: function(product) {
            items[product.id] ? items[product.id].quantity++ : items[product.id] = new Item(product);
            $rootScope.$broadcast(order.ITEM_ADDED);
            $rootScope.$broadcast(order.TOTAL_CHANGED);
         },
         removeItem: function(item) {
            delete items[item.id];
            $rootScope.$broadcast(order.TOTAL_CHANGED);
         },
         getItems: function() {
            return items;
         },
         getTotal: function() {
            var total = 0;
            for (var key in items) {
               total += (items[key].price * items[key].quantity);
            }
            return total += deliveryMethod.price;
         },
         getDeliveryMethod: function() {
            return deliveryMethod;
         },
         setDeliveryMethod: function(method) {
            deliveryMethod = method;
            $rootScope.$broadcast(order.TOTAL_CHANGED);
         },
         cancel: function() {
            items = {};
            deliveryMethod = DeliveryMethods[0];
            $rootScope.$broadcast(order.CANCELLED);
         },
         reset: function() {
            order.cancel();
         }
      };

      return order;
   }]);
