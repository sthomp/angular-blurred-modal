angular.module("stBlurredDialog",[])
	.constant('stBlurredDialogClasses',{
		blurredRegion: 'st-blurred-region'	
	 })
	.factory('stBlurredDialog', ['$timeout', function($timeout){
		var state = {
			subscribers: [],
			isOpen: false,
			dialogData: null
		}	

		return {
			open: function(pathToTemplate, data){
				$timeout(function(){
					state.dialogData = data;
					state.isOpen = true;
					angular.forEach(state.subscribers, function(subscriberCb){
						subscriberCb(state.isOpen, pathToTemplate);
					});
				});
			},
			close: function(){
				$timeout(function(){
					state.isOpen = false;
					angular.forEach(state.subscribers, function(subscriberCb){
						subscriberCb(state.isOpen);
					});
				});
			},
			isOpen: function(){
				return state.isOpen;
			},
			getDialogData: function(){
				return state.dialogData;
			},
			subscribe: function(cb){
				state.subscribers.push(cb);
			}
		}
	}])
	// This directive is used to blur the page
	.directive('stBlurredDialogRegion', [function(){
		return {
			restrict: "A",
			scope: {},
			controller: ['$scope', 'stBlurredDialog', '$element', 'stBlurredDialogClasses', function($scope, stBlurredDialog, $element, stBlurredDialogClasses){

				stBlurredDialog.subscribe(function(isOpen, path, data){
					if(isOpen){
						$element.addClass(stBlurredDialogClasses.blurredRegion);
					}
					else{
						$element.removeClass(stBlurredDialogClasses.blurredRegion);
					}
				});

          	}],
			link: function(scope, element, attrs){
			}
		}
	}])
	// This directive is used to show the modal dialog
	.directive('stBlurredDialogOverlay', [function(){
		return {
			restrict: "E",			
			replace: true,
			template: 	"<div ng-if='model.isOpen' class='st-blurred-region-overlay'>" +
						"<div style='text-align:right;'><button ng-click='close()' class='st-blurred-region-close'>&#10006;</button></div>" +
					  	"<div ng-include src='model.pathToTemplate'></p>" +
						"</div>",
			controller: ['$scope', 'stBlurredDialog', '$element', function($scope, stBlurredDialog, $element){

				$scope.model = {
					// We need to bind to the state of the service to check for state changes
					isOpen: false,
					pathToTemplate: null
				}

				stBlurredDialog.subscribe(function(isOpen, path){
					$scope.model.isOpen = isOpen;
					$scope.model.pathToTemplate = path;
				});
				
				$scope.close = function(){
					stBlurredDialog.close();
				}
          	}],
			link: function(scope, element, attrs){
			}
		}
	}]);
