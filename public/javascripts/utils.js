$(function() {
    var split_pane = $("#split_pane");
    var resize = $("#split_pane #top_pane");

    // this accounts for padding in the panels + 
    // borders, you could calculate this using jQuery
    var padding = 12; 
        
    $(resize).resizable({
          handles: 's',
          // maxHeight: 150,
          minHeight: 400,
          resize: function(event, ui){
              var currentHeight = ui.size.height;
              
              // this accounts for some lag in the ui.size value, if you take this away 
              // you'll get some instable behaviour
              $(this).height(currentHeight);
              
              // set the content panel width
              $("#split_pane #bottom_pane").height($(split_pane).height() - currentHeight - padding); 
              hs_chart.reflow()
          }
    });

    function setSplitPaneSize() {
      var new_height = $(window).height() - $("#split_pane").offset().top - 12;
      $("#split_pane").height(new_height);
      $(resize).height(new_height - padding - $("#split_pane #bottom_pane").height);
      if (typeof hs_chart !== 'undefined') {
        hs_chart.reflow();
      }
    };

    $(window).resize(setSplitPaneSize);

    setSplitPaneSize();
});
