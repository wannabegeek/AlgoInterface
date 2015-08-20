
$(function() {
     display_data(null);
});

function display_data(data) {
    $.getJSON('/data?callback=?', function (data) {
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
                data[i].timestamp, // the date
                data[i].o, // open
                data[i].h, // high
                data[i].l, // low
                data[i].c // close
            ]);

            volume.push([
                data[i].timestamp, // the date
                data[i].c // the volume
            ]);
        }


        // create the chart
        hs_chart = new Highcharts.StockChart({
            chart: {
                renderTo: 'performance_chart'
            },

            rangeSelector: {
                selected: 0
            },

            title: {
                text: 'VOD:LDN Historical'
            },

            yAxis: [{
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'OHLC'
                },
                height: '80%',
                lineWidth: 1
            }, {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'Volume'
                },
                top: '82%',
                height: '18%',
                offset: 0,
                lineWidth: 1
            }],

            series: [{
                type: 'candlestick',
                name: 'VOD:LDN',
                data: ohlc,
                yAxis: 0,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                type: 'line',
                name: 'VOD:LDN line',
                data: ohlc,
                yAxis: 0,
                lineWidth: 1,
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