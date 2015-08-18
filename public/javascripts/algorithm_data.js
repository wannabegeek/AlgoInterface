$(function() {
    display_data(null);
}

function display_data(data) {
    // chartData = [];
    // plotData = data['data'];
    // var maxVal = 0.0;
    // var minVal = Number.MAX_VALUE;
    // for (index = 0; index < plotData.length; ++index) {
    //     d = plotData[index];
    //     value = parseFloat(d["close"]);
    //     minVal = Math.min(minVal, value);
    //     maxVal = Math.max(maxVal, value);
    //     chartData[chartData.length] = [parseFloat(d["timestamp"] * 1000), value];
    // }

    $('#performance_chart').highcharts('StockChart', {
        rangeSelector: {
            selected: 6,
            inputEnabled: false,
        },

        title : {
            text : 'Stock Price'
        },

        series : [{
            type : 'area',
            name : 'SID #' + sid,
            // data : chartData,
            tooltip: {
                valueDecimals: 2
            },
            lineWidth: 1,
            threshold: null,
            fillColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.1).get('rgba'),
        }],
    });
}