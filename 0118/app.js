(function studentController($scope) {
	$scope.student = {
		firstName : "Degi",
		lastName : "Kwag",
		fees : 500,
		subjects : [
			{name: 'Physics', marks: 99},
			{name: 'Chemistry', marks: 89},
			{name: 'Math', marks:100}
		],
		fullName: function() {
		       var studentObject;
	       	       studenObject = $scope.student;
		       return studentObject.firstName + " " + studentObject.lastName;
		}
	};
})();	
