module.exports = function($scope, orderstatisticscompanyhistorylist, getDate){

    $scope.searchform = {};

    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = new Date();

    $scope.section.end = {};
    $scope.section.end.date = new Date();

    $scope.open = function(obj) {
        obj.opened = true;
    };

   
    $scope.load = function(){
        var para = {
            start_time : getDate($scope.section.start.date),
            end_time : getDate($scope.section.end.date)
        }

        para = angular.extend($scope.searchform, para);

        console.log(para);

        orderstatisticscompanyhistorylist.get(para, function(res){

            console.log(res);

            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return ;
            }

            $scope.objs = res.data;

            var objs = {};
            for(var i = 0; i < res.data.length; i++)
            {
                var tmp = res.data[i];
                var company_code = tmp.company_code;
                var sale_code = tmp.sale_code;
                var unit_price = tmp.unit_price;

                if(!objs.hasOwnProperty(company_code))
                {
                    var o = objs[company_code] = {};
                    o['saleobjs'] = {};
                    o['saleobjs'][sale_code] = {};
                    o['saleobjs'][sale_code]['prices'] = {};
                    o['saleobjs'][sale_code]['prices'][unit_price] = tmp;
                }
                else
                {
                    var o = objs[company_code]['saleobjs'];
                    if(!o.hasOwnProperty(sale_code))
                    {
                        o[sale_code] = {};
                        o[sale_code]['prices'] = {};
                        o[sale_code]['prices'][unit_price] = tmp;
                    }
                    else
                    {
                        //o[sale_code]['prices'][unit_price].
                    }
                }

            }


            return ;

            var objs = {};
            for(var i = 0; i < res.data.length; i++)
            {
                var tmp = res.data[i];
                var company_code = tmp.company_code
                var company_id_parents = tmp.company_id_parents;
                if(company_id_parents === undefined || company_id_parents == '') continue;

                //console.log(company_code_parent + '---' + company_code);

                var pointer = objs;
                var tmparr = company_id_parents.split(',');
                //console.log(tmparr);
                for(var j = 0; j < tmparr.length; j++)
                {
                    var tmpj = tmparr[j]
                    if(tmpj == 0 || tmpj == '') continue;
                    if(!pointer.hasOwnProperty(tmpj))
                    {
                        pointer[tmpj] = {};
                        pointer[tmpj]['company'] = [];
                    }
                    pointer = pointer[tmpj];
                }
                pointer['company'].push(tmp);
            }
            console.log(objs);



        });
    }
    $scope.load();



};