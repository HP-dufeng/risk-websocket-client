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
        // gridOptions.api.sizeColumnsToFit();
    }
};


function onStartLoad() {
    worker.postMessage('startLoad');
}

function onStopMessages() {
    worker.postMessage('stop');
    logMessage('Test stopped');
    console.log('Test stopped');
}



var worker;

function startWorker() {

    worker = new Worker(__basePath + 'worker.js');

    worker.onmessage = function(e) {
        switch (e.data.type) {
            case 'setRowData':
                gridOptions.api.setRowData(e.data.records);
                break;
            case 'updateData':
            console.log(e.data.records)
                gridOptions.api.updateRowData({add: e.data.add, update: e.data.update, remove: e.data.remove});
                break;
            default:
                console.log('unrecognised event type ' + e.type);
        }
    };
}




function logMessage(message) {
    document.querySelector('#eMessage').innerHTML = message;
}

// after page is loaded, create the grid.
document.addEventListener("DOMContentLoaded", function() {
    var eGridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(eGridDiv, gridOptions);
    startWorker();
    // onStartLoad();
});
