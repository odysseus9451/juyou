/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985){

    var create = BASEURL38985 + '/api/ac/tc/ticketOrderService/createOrder';

    var list = BASEURL38985 + '/api/as/tc/ticketorder/orderlist';

    var ticketlist = BASEURL38985 + '/api/as/tc/ticket2/orderticketlist';

    var alllist = BASEURL38985 + '/api/as/tc/ticketorder/orderalllist';

    var grouplist = BASEURL38985 + '/api/as/tc/grouporder/grouplist';

     var groupalllist = BASEURL38985 + '/api/as/tc/grouporder/groupalllist';

    return {
        createorder : function(){
            return $resource(create, {}, {});
        },
        list : function(){
            return $resource(list, {}, {});
        },
        alllist : function(){
            return $resource(alllist, {}, {});
        },
        ticketlist : function(){
            return $resource(ticketlist, {}, {});
        },
        grouplist : function(){
            return $resource(grouplist, {}, {});
        },
        groupalllist : function(){
            return $resource(groupalllist, {}, {});
        }
    };



};

module.exports = service;