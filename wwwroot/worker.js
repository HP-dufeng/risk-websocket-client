

// var globalRowData = [{"ActionFlag":2,"ActionKey":"0#15#0","AvailFund":6.7643950788064,"Clientmode":"Clientmode","CurrencyCode":"0","CustClass":"CustClass","CustName":"CustName","CustNo":"15","DropProfit":6.7643950788064,"DynCapRight":6.7643950788064,"DynRatio":6.7643950788064,"DynRights":6.7643950788064,"ExchFrznMargin":6.7643950788064,"ExchMargin":6.7643950788064,"ExchOptionDynMargin":6.7643950788064,"ExchOptionNowMargin":6.7643950788064,"FrznMargin":6.7643950788064,"FrznRoyalty":6.7643950788064,"FrznStrikeMargin":6.7643950788064,"HoldProfit":6.7643950788064,"LastRemain":6.7643950788064,"LastRiskLevel":"LastRiskLevel","Margin":6.7643950788064,"MobilePhone":"MobilePhone","MonitorNo":"0","OptionCap":6.7643950788064,"OptionDynMargin":6.7643950788064,"OptionNowMargin":6.7643950788064,"PackFlag":0,"RiskContractQty":15,"RiskDegree0":6.7643950788064,"RiskDegree1":6.7643950788064,"RiskDegree2":6.7643950788064,"RiskDegree3":6.7643950788064,"RiskLevel":"RiskLevel","RoyaltyInout":6.7643950788064,"TodayInout":6.7643950788064,"TradingNo":"TradingNo","XXX_NoUnkeyedLiteral":{},"XXX_sizecache":0,"XXX_unrecognized":""},{"ActionFlag":2,"ActionKey":"0#0#0","AvailFund":5.135749435014118,"Clientmode":"Clientmode","CurrencyCode":"0","CustClass":"CustClass","CustName":"CustName","CustNo":"0","DropProfit":5.135749435014118,"DynCapRight":5.135749435014118,"DynRatio":5.135749435014118,"DynRights":5.135749435014118,"ExchFrznMargin":5.135749435014118,"ExchMargin":5.135749435014118,"ExchOptionDynMargin":5.135749435014118,"ExchOptionNowMargin":5.135749435014118,"FrznMargin":5.135749435014118,"FrznRoyalty":5.135749435014118,"FrznStrikeMargin":5.135749435014118,"HoldProfit":5.135749435014118,"LastRemain":5.135749435014118,"LastRiskLevel":"LastRiskLevel","Margin":5.135749435014118,"MobilePhone":"MobilePhone","MonitorNo":"0","OptionCap":5.135749435014118,"OptionDynMargin":5.135749435014118,"OptionNowMargin":5.135749435014118,"PackFlag":0,"RiskContractQty":32,"RiskDegree0":5.135749435014118,"RiskDegree1":5.135749435014118,"RiskDegree2":5.135749435014118,"RiskDegree3":5.135749435014118,"RiskLevel":"RiskLevel","RoyaltyInout":5.135749435014118,"TodayInout":5.135749435014118,"TradingNo":"TradingNo","XXX_NoUnkeyedLiteral":{},"XXX_sizecache":0,"XXX_unrecognized":""}]


// postMessage({
//     type: 'setRowData',
//     records: globalRowData
// });


function sendMessages(){
    postMessage({
        type: 'updateData',
        add: [{"ActionFlag":2,"ActionKey":"0#15#1","AvailFund":5.135749435014118,"Clientmode":"Clientmode","CurrencyCode":"0","CustClass":"CustClass","CustName":"CustName","CustNo":"0","DropProfit":5.135749435014118,"DynCapRight":5.135749435014118,"DynRatio":5.135749435014118,"DynRights":5.135749435014118,"ExchFrznMargin":5.135749435014118,"ExchMargin":5.135749435014118,"ExchOptionDynMargin":5.135749435014118,"ExchOptionNowMargin":5.135749435014118,"FrznMargin":5.135749435014118,"FrznRoyalty":5.135749435014118,"FrznStrikeMargin":5.135749435014118,"HoldProfit":5.135749435014118,"LastRemain":5.135749435014118,"LastRiskLevel":"LastRiskLevel","Margin":5.135749435014118,"MobilePhone":"MobilePhone","MonitorNo":"0","OptionCap":5.135749435014118,"OptionDynMargin":5.135749435014118,"OptionNowMargin":5.135749435014118,"PackFlag":0,"RiskContractQty":32,"RiskDegree0":5.135749435014118,"RiskDegree1":5.135749435014118,"RiskDegree2":5.135749435014118,"RiskDegree3":5.135749435014118,"RiskLevel":"RiskLevel","RoyaltyInout":5.135749435014118,"TodayInout":5.135749435014118,"TradingNo":"TradingNo","XXX_NoUnkeyedLiteral":{},"XXX_sizecache":0,"XXX_unrecognized":""}],
        update: [{"ActionFlag":2,"ActionKey":"0#15#0","AvailFund":3.135749435014118,"Clientmode":"Clientmode","CurrencyCode":"0","CustClass":"CustClass","CustName":"CustName","CustNo":"0","DropProfit":5.135749435014118,"DynCapRight":5.135749435014118,"DynRatio":5.135749435014118,"DynRights":5.135749435014118,"ExchFrznMargin":5.135749435014118,"ExchMargin":5.135749435014118,"ExchOptionDynMargin":5.135749435014118,"ExchOptionNowMargin":5.135749435014118,"FrznMargin":5.135749435014118,"FrznRoyalty":5.135749435014118,"FrznStrikeMargin":5.135749435014118,"HoldProfit":5.135749435014118,"LastRemain":5.135749435014118,"LastRiskLevel":"LastRiskLevel","Margin":5.135749435014118,"MobilePhone":"MobilePhone","MonitorNo":"0","OptionCap":5.135749435014118,"OptionDynMargin":5.135749435014118,"OptionNowMargin":5.135749435014118,"PackFlag":0,"RiskContractQty":32,"RiskDegree0":5.135749435014118,"RiskDegree1":5.135749435014118,"RiskDegree2":5.135749435014118,"RiskDegree3":5.135749435014118,"RiskLevel":"RiskLevel","RoyaltyInout":5.135749435014118,"TodayInout":5.135749435014118,"TradingNo":"TradingNo","XXX_NoUnkeyedLiteral":{},"XXX_sizecache":0,"XXX_unrecognized":""}],
        remove: [{"ActionFlag":2,"ActionKey":"0#0#0","AvailFund":3.135749435014118,"Clientmode":"Clientmode","CurrencyCode":"0","CustClass":"CustClass","CustName":"CustName","CustNo":"0","DropProfit":5.135749435014118,"DynCapRight":5.135749435014118,"DynRatio":5.135749435014118,"DynRights":5.135749435014118,"ExchFrznMargin":5.135749435014118,"ExchMargin":5.135749435014118,"ExchOptionDynMargin":5.135749435014118,"ExchOptionNowMargin":5.135749435014118,"FrznMargin":5.135749435014118,"FrznRoyalty":5.135749435014118,"FrznStrikeMargin":5.135749435014118,"HoldProfit":5.135749435014118,"LastRemain":5.135749435014118,"LastRiskLevel":"LastRiskLevel","Margin":5.135749435014118,"MobilePhone":"MobilePhone","MonitorNo":"0","OptionCap":5.135749435014118,"OptionDynMargin":5.135749435014118,"OptionNowMargin":5.135749435014118,"PackFlag":0,"RiskContractQty":32,"RiskDegree0":5.135749435014118,"RiskDegree1":5.135749435014118,"RiskDegree2":5.135749435014118,"RiskDegree3":5.135749435014118,"RiskLevel":"RiskLevel","RoyaltyInout":5.135749435014118,"TodayInout":5.135749435014118,"TradingNo":"TradingNo","XXX_NoUnkeyedLiteral":{},"XXX_sizecache":0,"XXX_unrecognized":""}]
    });
}

var ws = new WebSocket("ws://127.0.0.1:8443/signalr");

ws.onmessage = function (event) {
    var theData = JSON.parse(event.data);
    console.log(theData)
}

self.addEventListener('message', function(e) {
    switch (e.data.type) {
        case 'startLoad':
            console.log('starting load test');
            ws.send(JSON.stringify(e.data.monitorNos))
            break;
        case 'stopTest':
            console.log('stopping test');
            break;
        default:
            console.log('unknown message type ' + e.data);
            break;
    }
});

