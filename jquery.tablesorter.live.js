jQuery(function($) {
  $.tablesorter.addParser({
    id: 'text-select',
    is: function(s, table, node) {
      return $(node).find("select").length > 0;
    },
    format: function(s, table, el) {
      var val = $(el).find("select").val().toLowerCase();
      return val;
    },
    type: 'text'
  });
  
  // auto-detects inputs of type text in a column
  $.tablesorter.addParser({
    id: 'text-input',
    is: function(s, table, node) {
      return $(node).find("input:text").length > 0;
    },
    format: function(s, table, el) {
      var val = $(el).find("input:text").val().toLowerCase();
      return val;
    },
    type: 'text'
  });
  
  $.tablesorter.addParser({
    id: 'checkbox',
    is: function(s, table, node) {
      return $(node).find("input:checkbox").length > 0;
    },
    format: function(s, table, el) {
      var val = ($(el).find("input:checked").length > 0)? 1 : 0;
      return val;
    },
    type: 'numeric'
  });
  
  $.tablesorter.addParser({
    id: 'radio',
    is: function(s, table, node) {
      return $(node).find("input:radio").length > 0;
    },
    format: function(s, table, el) {
      var val = ($(el).find("input:checked").length > 0)? 1 : 0;
      return val;
    },
    type: 'numeric'
  });
   
  $.tablesorter.addWidget({
    id: "live-inputs",
    format: function(table) {
      if(table.config.debug) { var time = new Date(); }
      
      $(table).bind("sortStart.tablesorter_live", function() {
        var table = $(this);
        if(table.data("tablesorter_live_dirty")) {
          debugger;
          if(table[0].config.debug) { var time = new Date(); }

          table.removeData("tablesorter_live_dirty")
            .trigger("update")
            .trigger("appendCache");
            
          if(table[0].config.debug) { $.tablesorter.benchmark("Updated/AppendCache to cleanup dirty table", time); }        
        }
      }).find(":input")
        .unbind("change.tablesorter_live")
        .bind("change.tablesorter_live", function() {
          $(this).closest("table").data("tablesorter_live_dirty", true);
      });
      
      if(table.config.debug) { $.tablesorter.benchmark("Applied Live Widget", time); }
    }
  });	
});