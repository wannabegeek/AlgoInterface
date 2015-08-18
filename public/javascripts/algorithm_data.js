$(function() {
//     display_data(null);
});

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
    // 
    // $('#performance_chart').highcharts('StockChart', {
    //     rangeSelector: {
    //         selected: 6,
    //         inputEnabled: false,
    //     },

    //     title : {
    //         text : 'Stock Price'
    //     },

    //     series : [{
    //         type : 'area',
    //         name : 'SID #' + sid,
    //         // data : chartData,
    //         tooltip: {
    //             valueDecimals: 2
    //         },
    //         lineWidth: 1,
    //         threshold: null,
    //         fillColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.1).get('rgba'),
    //     }],
    // });
    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-ohlcv.json&callback=?', function (data) {
        // split the data set into ohlc and volume
        var ohlc = [],
            volume = [],
            dataLength = data.length,
            // set the allowed units for data grouping
            groupingUnits = [[
                'week',                         // unit name
                [1]                             // allowed multiples
            ], [
                'month',
                [1, 2, 3, 4, 6]
            ]],

            i = 0;

        for (i; i < dataLength; i += 1) {
            ohlc.push([
                data[i][0], // the date
                data[i][1], // open
                data[i][2], // high
                data[i][3], // low
                data[i][4] // close
            ]);

            volume.push([
                data[i][0], // the date
                data[i][5] // the volume
            ]);
        }


        // create the chart
        $('#performance_chart').highcharts('StockChart', {

            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'AAPL Historical'
            },

            yAxis: [{
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'OHLC'
                },
                height: '60%',
                lineWidth: 2
            }, {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'Volume'
                },
                top: '65%',
                height: '35%',
                offset: 0,
                lineWidth: 2
            }],

            series: [{
                type: 'candlestick',
                name: 'AAPL',
                data: ohlc,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                type: 'column',
                name: 'Volume',
                data: volume,
                yAxis: 1,
                dataGrouping: {
                    units: groupingUnits
                }
            }]
        });
    });
}