'use strict';

/* Controllers */

angular.module('angularShop.controllers', [])
  .controller('ProductCarouselCtrl', ['$scope', 'Products', 'Order',  function($scope, Products, Order) {
     $scope.products = Products;

     $scope.buy = function(product) {
        Order.addItem(product);
     };
  }])
  .controller('BasketCtrl', ['$scope', 'Order', function($scope, Order) {
     $scope.$watch(Order.getItems, function(items) {
        $scope.items = items;
     });

     $scope.plus = function(item) {
        item.incrementQuantity();
     };

     $scope.minus = function(item) {
        item.decrementQuantity();
     };

     $scope.remove = function(item) {
        Order.removeItem(item);
     };
  }])
  .controller('DeliveryMethodCtrl', ['$scope', 'DeliveryMethods', 'Order', function($scope, DeliveryMethods, Order) {
     $scope.methods = DeliveryMethods;

     $scope.$watch('deliveryMethod', function(newMethod, oldMethod) {
        if (newMethod === oldMethod) return;
        Order.setDeliveryMethod(newMethod);
     });

     $scope.$watch(Order.getDeliveryMethod, function(deliveryMethod) {
        $scope.deliveryMethod = deliveryMethod;
     });
  }])
  .controller('CompletionCtrl', ['$scope', 'Order', function($scope, Order) {
     $scope.$watch(Order.getTotal, function(total) {
        $scope.totalAmount = total;
     });

     $scope.complete = function() {
        alert('Thank you for your order');
        Order.reset();
     };

     $scope.cancel = Order.cancel;
  }]);
