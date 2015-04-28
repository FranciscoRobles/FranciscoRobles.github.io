var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.myVar = true;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
});