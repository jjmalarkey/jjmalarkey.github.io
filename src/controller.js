var app = angular.module('myApp', []);
app.controller('testCtrl', function($scope) {
	$scope.gridWidth = 450;
	$scope.gridHeight = 450;

	$scope.areaType = "";
	$scope.areaTypeShapes = ['Line', 'Sphere', 'Cube'];
	$scope.spellRange;
	$scope.spellWidth;
	$scope.spellRadius;

	$scope.drawing = function() {
		var canvas = document.getElementById('tutorial');
		var ctx = canvas.getContext('2d');
		ctx.canvas.height = $scope.gridHeight;
		ctx.canvas.width = $scope.gridWidth;
		var gridsizepx = 50;
		console.log('range', $scope.spellRange);

		for(var i = 0; i < $scope.gridWidth; i = i + gridsizepx) {
			ctx.beginPath();
			ctx.lineTo(i, 0);
			ctx.lineTo(i, $scope.gridHeight);
			ctx.stroke();
		}

		for(var i = 0; i < $scope.gridHeight; i = i + gridsizepx) {
			ctx.beginPath();
			ctx.lineTo(0, i);
			ctx.lineTo($scope.gridHeight, i);
			ctx.stroke();
		}

		if($scope.areaType == 'Line') {
			ctx.beginPath();
			ctx.arc(25,225,20,0,2*Math.PI);
			ctx.fill();

			ctx.strokeStyle = 'red';
			ctx.beginPath();
			ctx.moveTo(25,225);
			ctx.lineTo(($scope.spellRange*10)+gridsizepx, 225);
			ctx.stroke();
		}
		else if($scope.areaType =='Cube') {
		/*	ctx.strokeStyle = 'red';
			ctx.beginPath();
			ctx.arc(25,225,10,0,2*Math.PI);
			ctx.fill();
*/
			ctx.fillStyle = 'red';
			ctx.globalAlpha = 0.5;
			ctx.fillRect(100,100,200,200);
		}
	}
});
