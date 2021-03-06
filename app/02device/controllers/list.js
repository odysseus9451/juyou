module.exports = function($scope, $uibModal, typelist, devicelist, add, del, $state, $stateParams){

	var para = {};
	var view = $stateParams.placecode;
	if(view !== '') para['view'] = view;

	function load(){

		devicelist.get(para, function(res){

			console.log(res);
			if(res.errcode === 0)
			{
				$scope.objs = res.data;
			}
			else
			{
				alert(res.errmsg);
			}

		});
	}
	load();


	//打开模态框
	$scope.configurationticket = function(device_code, place_code){

		var modalInstance = $uibModal.open({
	      template: require('../views/tickettypelist.html'),
	      controller: 'tickettypelist',
	      resolve: {
	      	view : function(){
	      		return place_code;
	      	},
	      	device_code : function(){
	      		return device_code;
	      	},
	      	typelist : function(){
	      		return typelist;
	      	},
	      	add : function(){
	      		return add;
	      	},
	      	del : function(){
	      		return del;
	      	}
	      }
	    });

	    modalInstance.result.then(function () {
	      
	      load();

	    }, function () {
	      //$log.info('Modal dismissed at: ' + new Date());
	    });
	}

	$scope.edit = function(id){

		$state.go('app.devicetktedit', {'id' : id});

	};

	$scope.create = function()
	{
		$state.go('app.devicetktcreate', {'placecode' : view});
	}


};