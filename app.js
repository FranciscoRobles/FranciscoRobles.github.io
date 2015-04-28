var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.person = {
        firstName: "John",
        lastName: "."
    };
    $scope.myVar = true;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
});