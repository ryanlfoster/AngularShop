'use strict';

/* Controllers */

angular.module('cmcShop.controllers', [])
  .controller('ProductCarouselCtrl', ['$scope', 'Products', 'Order',  function($scope, Products, Order) {
     $scope.products = Products;

     $scope.buy = function(product) {
        Order.addItem(product);
     };
  }])
  .controller('BasketCtrl', ['$scope', 'Order', function($scope, Order) {
     $scope.items = [];

     var eventHandler = function() {
        $scope.items = Order.getItems();
     };
     $scope.$on(Order.ITEM_ADDED, eventHandler);
     $scope.$on(Order.CANCELLED, eventHandler);

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
     $scope.selectedMethod = Order.getDeliveryMethod();
     
     $scope.$watch('selectedMethod', function(method) {
        Order.setDeliveryMethod(method);
     });
  }])
  .controller('CompletionCtrl', ['$scope', 'Order', function($scope, Order) {
     $scope.totalAmount = 0;

     var eventHandler = function() {
        $scope.totalAmount = Order.getTotal();
     };
     $scope.$on(Order.TOTAL_CHANGED, eventHandler);
     $scope.$on(Order.CANCELLED, eventHandler);

     $scope.complete = function() {
        alert('Thank you for your order');
        Order.reset();
     };

     $scope.cancel = Order.cancel;
  }]);
