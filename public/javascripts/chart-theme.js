/**
 * Dark theme for Highcharts JS
 * @author Tom Fewster
 */

var gray_darkest = '#222222';
var gray_darker = '#292929';
var gray_dark = '#333333';
var gray = '#555555';
var gray_light = '#999999';
var gray_lighter = '#eeeeee';

 // var performance_color = "#505053";
var performance_color = "#FFF";

var candle_up = 'green';
var candle_down = 'red';

var grid_color = gray_dark;
var grid_minor_color = gray_darker;

Highcharts.theme = {
   colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: null,
      style: {
         fontFamily: '"Trebuchet MS", Verdana, sans-serif"'
      },
      plotBorderColor: grid_color
   },
   title: {
      style: {
         color: '#E0E0E3',
         fontSize: '15px'
      }
   },
   subtitle: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase'
      }
   },
   xAxis: {
      gridLineColor: grid_color,
      labels: {
         style: {
            color: gray
         }
      },
      lineColor: grid_color,
      minorGridLineColor: grid_minor_color,
      tickColor: grid_color,
      title: {
         style: {
            color: '#A0A0A3'

         }
      }
   },
   yAxis: {
      gridLineColor: grid_color,
      labels: {
         style: {
            color: gray
         }
      },
      lineColor: grid_color,
      minorGridLineColor: grid_minor_color,
      tickColor: grid_color,
      tickWidth: 1,
      title: {
         style: {
            color: '#A0A0A3'
         }
      }
   },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
         color: '#F0F0F0'
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: gray
         },
         marker: {
            lineColor: '#333'
         }
      },
      boxplot: {
         fillColor: performance_color
      },
      candlestick: {
         lineColor: candle_down,
         upLineColor: candle_up,
         color: candle_down,
         upColor: candle_up
      },
      errorbar: {
         color: 'white'
      }
   },
   legend: {
      itemStyle: {
         color: '#E0E0E3'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#606063'
      }
   },
   credits: {
      style: {
         color: '#666'
      }
   },
   labels: {
      style: {
         color: '#707073'
      }
   },

   drilldown: {
      activeAxisLabelStyle: {
         color: '#F0F0F3'
      },
      activeDataLabelStyle: {
         color: '#F0F0F3'
      }
   },

   navigation: {
      buttonOptions: {
         symbolStroke: '#DDDDDD',
         theme: {
            fill: '#505053'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#505053',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: grid_color,
      inputStyle: {
         backgroundColor: '#333',
         color: 'white'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: grid_color
      }
   },

   scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
   },

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);