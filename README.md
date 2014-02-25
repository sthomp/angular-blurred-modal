angular-blurred-modal
=====================

A fullscreen modal dialog that blurs the background

Example
-------

http://sthomp.github.io/angular-blurred-modal

Usage
-----

You will need to use 2 angular directives in your code. ``st-blurred-dialog-region`` specifies the region of HTML that will be blurred. ``st-blurred-dialog-overlay`` must be placed wherever you want the modal HTML to render.

Note that ``st-blurred-dialog-region`` is actually optional. If you just want a fullscreen modal without the blur effect then you can leave it out. (It can be useful to not have the blur effect in mobile web since the blur effect can slow down performance on some mobile browsers).

Example
-------

HTML:


```html
<html ng-app="MyDemo">
	<head>
		<link rel="stylesheet" href="http://rawgithub.com/sthomp/angular-blurred-modal/master/st-blurred-dialog.css">
	</head>
	<body ng-controller="MyCtrl">
		<div st-blurred-dialog-region>
			<h1>Hello World</h1>
			<p>The body of your page goes here</p>
		</div>
		<st-blurred-dialog-overlay></st-blurred-dialog-overlay>

		<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular.min.js"></script>
		<script type="text/javascript" src="http://rawgithub.com/sthomp/angular-blurred-modal/master/st-blurred-dialog.js"></script>
	</body>
</html>
```

Javascript:

```javascript
// Import the module
var app = angular.module('MyDemo', ['stBlurredDialog']);

// Inject stBlurredDialog
app.controller('MyCtrl', ['$scope', 'stBlurredDialog', function($scope, stBlurredDialog){
	$scope.openModal = function(){
		// Call open() with a template and some data
		stBlurredDialog.open('dialog_template.html', {msg: 'Hello from the controller!'});
	}
}]);

// Create a controller for your modal dialog
app.controller('DialogCtrl', ['$scope', 'stBlurredDialog', function($scope, stBlurredDialog){
	// Get the data passed from the controller
	$scope.dialogData = stBlurredDialog.getDialogData();
}]);

```
