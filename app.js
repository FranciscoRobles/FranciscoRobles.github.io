var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.person = {
        firstName: "The following terms and conditions ("Terms and Conditions") govern your use of the website give http://franciscorobles.github.io/Links/Restaurantes.html(el "Web Site") and any of the contents available from or through this Web Site",
        lastName: "including any content derived therefrom. Gluten Free has made available the Website. We may change the Terms and Conditions of Use at any time without notice, only posting the changes on the Website. TO USE THE WEB SITE, YOU ACCEPT AND AGREE TO THESE TERMS AND CONDITIONS WITH REGARD TO YOUR USE OF THE WEB SITE. If you do not agree to these Terms and Conditions, you may not have access to it or use the Website in any other way."
    };
    $scope.myVar = true;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
});