$(function() {
    var resize= $("#split_pane #top_pane");
    var containerHeight = $("#split_pane").height();
        
    $(resize).resizable({
          handles: 's',
          // maxHeight: 150,
          minHeight: 400,
          resize: function(event, ui){
              var currentHeight = ui.size.height;
              
              // this accounts for padding in the panels + 
              // borders, you could calculate this using jQuery
              var padding = 12; 
              
              // this accounts for some lag in the ui.size value, if you take this away 
              // you'll get some instable behaviour
              $(this).height(currentHeight);
              
              // set the content panel width
              $("#split_pane #bottom_pane").height(containerHeight - currentHeight - padding); 
              hs_chart.reflow()
          }
    });
});
