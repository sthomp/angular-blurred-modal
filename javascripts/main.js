console.log('This would be the main JS file.');

var app = angular.module('MyDemo', ['stBlurredDialog']);

app.controller('MyCtrl', ['$scope', 'stBlurredDialog', function($scope, stBlurredDialog){
	$scope.openModal = function(){
		stBlurredDialog.open('dialog_template.html', {msg: 'Hello from the controller!'});
	}
}]);

app.controller('DialogCtrl', ['$scope', 'stBlurredDialog', function($scope, stBlurredDialog){
	$scope.dialogData = stBlurredDialog.getDialogData();
}]);
