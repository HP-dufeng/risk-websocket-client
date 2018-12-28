var columnDefs = [
    {headerName: 'MonitorNo', field: 'MonitorNo', type: 'dimension'},
    {headerName: 'ActionKey', field: 'ActionKey', type: 'dimension'},
    {headerName: 'AvailFund', field: 'AvailFund', type: 'measure'},
    {headerName: 'Clientmode', field: 'Clientmode', type: 'dimension'},
    {headerName: 'CurrencyCode', field: 'CurrencyCode', type: 'dimension'},
    {headerName: 'CustClass', field: 'CustClass', type: 'dimension'},
    {headerName: 'CustName', field: 'CustName', type: 'dimension'},
    {headerName: 'CustNo', field: 'CustNo', type: 'dimension'},
    {headerName: 'DropProfit', field: 'DropProfit', type: 'measure'},
    {headerName: 'DynCapRight', field: 'DynCapRight', type: 'measure'},
    {headerName: 'DynRatio', field: 'DynRatio', type: 'measure'},
    {headerName: 'DynRights', field: 'DynRights', type: 'measure'},
    {headerName: 'ExchFrznMargin', field: 'ExchFrznMargin', type: 'measure'},
    {headerName: 'ExchMargin', field: 'ExchMargin', type: 'measure'},
    {headerName: 'ExchOptionDynMargin', field: 'ExchOptionDynMargin', type: 'measure'},
    {headerName: 'ExchOptionNowMargin', field: 'ExchOptionNowMargin', type: 'measure'},
    {headerName: 'FrznMargin', field: 'FrznMargin', type: 'measure'},
    {headerName: 'FrznRoyalty', field: 'FrznRoyalty', type: 'measure'},
    {headerName: 'FrznStrikeMargin', field: 'FrznStrikeMargin', type: 'measure'},
    {headerName: 'HoldProfit', field: 'HoldProfit', type: 'measure'},
    {headerName: 'LastRiskLevel', field: 'LastRiskLevel', type: 'dimension'},
    {headerName: 'Margin', field: 'Margin', type: 'measure'},
    {headerName: 'MobilePhone', field: 'MobilePhone', type: 'dimension'},    
    {headerName: 'OptionCap', field: 'OptionCap', type: 'measure'},
    {headerName: 'OptionDynMargin', field: 'OptionDynMargin', type: 'measure'},
    {headerName: 'OptionNowMargin', field: 'OptionNowMargin', type: 'measure'},
    {headerName: 'PackFlag', field: 'PackFlag', type: 'dimension'},
    {headerName: 'RiskContractQty', field: 'RiskContractQty', type: 'measure'},
    {headerName: 'RiskDegree0', field: 'RiskDegree0', type: 'measure'},
    {headerName: 'RiskDegree1', field: 'RiskDegree1', type: 'measure'},
    {headerName: 'RiskDegree2', field: 'RiskDegree2', type: 'measure'},
    {headerName: 'RiskDegree3', field: 'RiskDegree3', type: 'measure'},
    {headerName: 'RiskLevel', field: 'RiskLevel', type: 'dimension'},
    {headerName: 'RoyaltyInout', field: 'RoyaltyInout', type: 'measure'},
    {headerName: 'TodayInout', field: 'TodayInout', type: 'measure'},
    {headerName: 'TradingNo', field: 'TradingNo', type: 'dimension'}
    ];

function numberCellFormatter(params) {
    return math.round(params.value,2);
}

var gridOptions = {
    deltaRowDataMode: true,
    rowData: [],
    columnTypes: {
        measure: {
            width: 150,
            aggFunc: 'sum',
            enableValue: true,
            cellClass: 'number',
            valueFormatter: numberCellFormatter,
            cellRenderer:'agAnimateShowChangeCellRenderer'
        }
    },
    columnDefs: columnDefs,
    enableStatusBar: true,
    animateRows: true,
    enableColResize: true,
    enableRangeSelection: true,
    enableSorting: true,
    rowGroupPanelShow: 'always',
    pivotPanelShow: 'always',
    suppressAggFuncInHeader: true,
    getRowNodeId: function(data) { return data.ActionKey; },
    defaultColDef: {
        width: 120
    },
    onGridReady: function(params) {
        
    }
};

// reducer
/**  Exp : 
 * action = {
     type: 'UPDATE',
     payload: {
         update : Immutable.Map(
             [
                 ["0#15#1",{"ActionFlag":2,"ActionKey":"0#15#1","AvailFund":5.135749435014118,"Clientmode":"Clientmode","CurrencyCode":"0","CustClass":"CustClass","CustName":"CustName","CustNo":"0","DropProfit":5.135749435014118,"DynCapRight":5.135749435014118,"DynRatio":5.135749435014118,"DynRights":5.135749435014118,"ExchFrznMargin":5.135749435014118,"ExchMargin":5.135749435014118,"ExchOptionDynMargin":5.135749435014118,"ExchOptionNowMargin":5.135749435014118,"FrznMargin":5.135749435014118,"FrznRoyalty":5.135749435014118,"FrznStrikeMargin":5.135749435014118,"HoldProfit":5.135749435014118,"LastRemain":5.135749435014118,"LastRiskLevel":"LastRiskLevel","Margin":5.135749435014118,"MobilePhone":"MobilePhone","MonitorNo":"0","OptionCap":5.135749435014118,"OptionDynMargin":5.135749435014118,"OptionNowMargin":5.135749435014118,"PackFlag":0,"RiskContractQty":32,"RiskDegree0":5.135749435014118,"RiskDegree1":5.135749435014118,"RiskDegree2":5.135749435014118,"RiskDegree3":5.135749435014118,"RiskLevel":"RiskLevel","RoyaltyInout":5.135749435014118,"TodayInout":5.135749435014118,"TradingNo":"TradingNo","XXX_NoUnkeyedLiteral":{},"XXX_sizecache":0,"XXX_unrecognized":""}],
                 ["0#15#0",{"ActionFlag":2,"ActionKey":"0#15#0","AvailFund":6.7643950788064,"Clientmode":"Clientmode","CurrencyCode":"0","CustClass":"CustClass","CustName":"CustName","CustNo":"15","DropProfit":6.7643950788064,"DynCapRight":6.7643950788064,"DynRatio":6.7643950788064,"DynRights":6.7643950788064,"ExchFrznMargin":6.7643950788064,"ExchMargin":6.7643950788064,"ExchOptionDynMargin":6.7643950788064,"ExchOptionNowMargin":6.7643950788064,"FrznMargin":6.7643950788064,"FrznRoyalty":6.7643950788064,"FrznStrikeMargin":6.7643950788064,"HoldProfit":6.7643950788064,"LastRemain":6.7643950788064,"LastRiskLevel":"LastRiskLevel","Margin":6.7643950788064,"MobilePhone":"MobilePhone","MonitorNo":"0","OptionCap":6.7643950788064,"OptionDynMargin":6.7643950788064,"OptionNowMargin":6.7643950788064,"PackFlag":0,"RiskContractQty":15,"RiskDegree0":6.7643950788064,"RiskDegree1":6.7643950788064,"RiskDegree2":6.7643950788064,"RiskDegree3":6.7643950788064,"RiskLevel":"RiskLevel","RoyaltyInout":6.7643950788064,"TodayInout":6.7643950788064,"TradingNo":"TradingNo","XXX_NoUnkeyedLiteral":{},"XXX_sizecache":0,"XXX_unrecognized":""}]
             ]),
         delete : ["0#15#0"]
     }
   };
*/
function deliver(state = Immutable.Map(), action) {
    switch (action.type) {
      case 'UPDATE':
        return state.withMutations(map => {
            map.merge(action.payload.update).deleteAll(action.payload.delete)
        })
      default:
        return state
    }
  }

  let store = Redux.createStore(deliver)
  store.subscribe(() => {
      let values = store.getState().valueSeq().toArray();
      document.querySelector('#eMessage').innerHTML = "total: " + values.length

      gridOptions.api.setRowData(values)
    })


const { webSocket } = rxjs.webSocket;
const { map, filter, bufferTime,groupBy, mergeMap, reduce } = rxjs.operators;

function updateGrid(datas) {
    var del = []
    var update = []
    datas.forEach(e => {
        if (e.ActionFlag == 2){
            del.push(e.ActionKey)
        } else {
            update.push([e.ActionKey, e])
        }
        // update.push([e.ActionKey, e])
    })

    store.dispatch({
        type: 'UPDATE',
        payload: {
            update : Immutable.Map(update),
            delete : del
        }
      });
    
      document.querySelector('#eMessageForUpdated').innerHTML = "updated: " + update.length + "\n" + "deleted: " + del.length;
}

var subscribe;
function onStartSubscribe() {
    var no = document.querySelector("#monitornos").value.split(",");
    subscribe = newSubscribe();

    subscribe.next(no)
}

function onStopSubscribe() {
    subscribe.unsubscribe();
}

function newSubscribe() {
    // var ws = webSocket("ws://risk-websocket-server-rma-7x24.apps.dev-cefcfco.com/signalr");
    var ws = webSocket("ws://localhost:8443/signalr"); 

    ws.multiplex(() => [], () => [], message => message.type === 'SubscribeCustRisk')
    .pipe(
        bufferTime(200),
        filter(m=> m.length>0),
    )
    .subscribe(res => {
        updateGrid(res)
    });
    
    return ws;
}

// after page is loaded, create the grid.
document.addEventListener("DOMContentLoaded", function() {
    var eGridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(eGridDiv, gridOptions);

    document.querySelector("#monitornos").value = "0,1,2,3,4,5,6,7,8,9"
});
