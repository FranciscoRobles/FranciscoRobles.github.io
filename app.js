var app = angular.module('app', []);
app.controller('personCtrl', function($scope) {
    $scope.person = {
        firstName: "John",
        lastName: "Doe"
    };
    $scope.myVar = true;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
});