module.exports = function($scope, info, $stateParams, slist, devicetype, update, remove){

	//机器id
	var id = $stateParams.id;

	$scope.lock = true;

	//机器类型
	$scope.typearr = devicetype;

	//景区下拉
	slist().then(function(res) {
        console.log(res);
        if(res.errcode === 0)
        {
        	$scope.viewarr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });

	//票机详情
	info.get({'id' : id}, function(res){

		console.log(res);

		if(res.errcode === 0)
		{
			$scope.obj = res.data;
			$scope.obj.id = id;
		}
		else
		{
			alert(res.errmsg);
		}

	});


	//gogo
	$scope.gogo = function(){

		update.save($scope.obj, function(res){

			console.log(res);

			if(res.errcode !== 0)
			{
				alert(res.errmsg);
			}
			else
			{
				alert('修改成功');
			}

		});

	};


	//
	$scope.remove = function(){

		console.log({'device_code' : $scope.obj.code});
		remove.save({'device_code' : $scope.obj.code}, function(res){

			console.log(res);

			if(res.errcode === 0 || res.errcode === 1105)
			{
				$scope.lock = false;
			}
			else
			{
				alert(res.errmsg);
			}

		});
	}

};