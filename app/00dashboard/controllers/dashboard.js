module.exports = function($scope, noticelist, ITEMS_PERPAGE, $uibModal, noticeinfo){

    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.load = function () {
        
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        
        noticelist.get(para, function(res){

            console.log(res);

            if(res.errcode === 0)
            {
                $scope.objs = res.data.results;
                $scope.bigTotalItems = res.data.totalRecord;
            }
            else
            {
                alert(res.errmsg);
            }

        });

    };
    $scope.load();




    //打开模态框
    $scope.info = function(id){

        //alert(device_code);

        var modalInstance = $uibModal.open({
          template: require('../views/noticeinfo.html'),
          controller: 'noticeinfo',
          resolve: {
            id : function(){
                return id;
            },
            noticeinfo : function(){
                return noticeinfo;
            }
          }
        });

        modalInstance.result.then(function () {
          
          load();

        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });
    }


};