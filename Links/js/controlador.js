var controlador = function ($scope) {
     $scope.dato = 'Bienvenido';

	$scope.periodistas = [
       {nombre: 'Jorge Zepeda', medio: 'Sin Embargo'},
       {nombre: 'Diego Petersen', medio: 'Informador'},
       {nombre: 'Diego Osorno', medio: 'Varios'},
	{nombre: 'Paco Robles', medio:'Swag'}
	];
     
	$scope.comida = [
	{nombre: 'Chili\'s', lugar: 'Jalisco'},
	{nombre: 'Applebees', lugar: 'Nayarit'},
	{nombre: 'CheeseCake', lugar: 'Cd. Mexico'},
	{nombre: 'McDonalds', lugar: 'Monterrey'}
	];
	
	$scope.unaFuncion = function() {
      		return 2014;
   		};


	$scope.dameUnBooleano = function () {
		//console.log(true);
		return false;
};

     
}



var otroControlador=function customersController($scope,$http) {
    $http.get("")
    .success(function(response) {$scope.miJson = response;});
}