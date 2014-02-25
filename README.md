angular-blurred-modal
=====================

A fullscreen modal dialog that blurs the background

Example
-------

http://sthomp.github.io/angular-blurred-modal

Usage
-----

You will need to use 2 angular directives in your code. ``st-blurred-dialog-region`` specifies the region of HTML that will be blurred. ``st-blurred-dialog-overlay`` must be placed whever you want the modal HTML to render.

Note that ``st-blurred-dialog-region`` is actually optional. If you just want a fullscreen modal without the blur effect then you can leave it out. (It can be useful to not have the blur effect in mobile web since the blur effect can slow down performance on some mobile browsers).

Example
-------

HTML:


```html
<html>
	<head>
	</head>
	<body>
		<div st-blurred-dialog-region>
			<h1>Hello World</h1>
			<p>The body of your page goes here</p>
		</div>
		<st-blurred-dialog-overlay></st-blurred-dialog-overlay>
	</body>
</html>
```

Javascript:

```javascript
app.controller('MyController', ['$scope', 'stBlurredDialog', function($scope, stBlurredDialog){

    // You can call this from your view
    $scope.openMyDialog = function(){
        stBlurredDialog.open(FMIConfig.Dialog.addToCollection, {data: 'This data can be passed to the modal'} );
    }

}]);
```
