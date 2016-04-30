module.exports = function($scope, $state, $stateParams, edituserinfo, oneuserinfo){

	$scope.objt = {};

	oneuserinfo.get({'mobile' : $stateParams.mobile}, function(res){
		console.log(res);

		if(res.errcode === 0)
		{
			$scope.objt = res.data;
		}

	});

	$scope.gogo = function(){
		$scope.objt.mobile = $stateParams.mobile;
		edituserinfo.save($scope.objt, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				$state.go('app.userinfo', {'mobile' : $scope.objt.mobile});
			}
			else
			{
				alert(res.errmsg);
			}

		});
	}
	

};
