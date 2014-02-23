angular.module('CoachCrabbe.controllers', [])

.controller('workoutController', function($scope, $stateParams, Constants){
	var anger = Constants.angerLevels[$stateParams.anger] * 2;

	//Set up scope variables
	$scope.uphill = false;
	$scope.backwards = false;
	$scope.cones = anger;

	//Determine backwards
	if (anger >= 6) {
		if (Math.random() > .5) {
			$scope.backwards = true;
		}
	}

	//Determine uphill
	if (anger >= 4) {
		if (Math.random() > .5) {
			$scope.uphill = true;
		}
	}

	if ($scope.backwards) {
		$scope.cones -= 4;
	}

	if ($scope.uphill) {
		$scope.cones -= 2;
	}
});