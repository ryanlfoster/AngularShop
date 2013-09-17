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
  .controller('DeliveryMethodCtrl', ['$scope', 'DeliveryMethods', function($scope, DeliveryMethods) {
     $scope.methods = DeliveryMethods;
  }]);
