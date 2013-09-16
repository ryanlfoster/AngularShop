'use strict';

/* Controllers */

angular.module('cmcShop.controllers', [])
  .controller('ProductCarouselCtrl', ['$scope', 'products', function($scope, products) {
     var slides = $scope.slides = products();


  }]);
