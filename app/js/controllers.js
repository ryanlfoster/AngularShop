'use strict';

/* Controllers */

angular.module('cmcShop.controllers', [])
  .controller('ProductCarouselCtrl', ['$scope', 'Products', 'Basket',  function($scope, Products, Basket) {
     $scope.products = Products;

     $scope.buy = function(product) {
        Basket.add(product);
     };
  }])
  .controller('BasketCtrl', ['$scope', 'Basket', function($scope, Basket) {
     $scope.items = [];

     $scope.$on(Basket.ITEM_ADDED, function() {
        $scope.items = Basket.getItems();
     });
  }])
  .controller('DeliveryMethodCtrl', ['$scope', 'DeliveryMethods', 'Basket', function($scope, DeliveryMethods, Basket) {
     $scope.methods = DeliveryMethods;
     $scope.$watch('selectedMethod', function(method) {
        Basket.setDeliveryMethod(method);
     });
  }])
  .controller('CompletionCtrl', ['$scope', 'Basket', function($scope, Basket) {
     $scope.totalAmount = 0;
     for (var items = Basket.getItems(), i = 0; i < items.length; i++) {
        $scope.totalAmount += items[i].price;
     }
     $scope.totalAmount += Basket.getDeliveryMethod().price;
  }]);
