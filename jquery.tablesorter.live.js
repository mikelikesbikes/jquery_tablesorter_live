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
      $(table).find(":input")
        .unbind("change.tablesorter-live-inputs")
        .bind("change.tablesorter-live-inputs", function() {
          $(this).closest("table").trigger("update").trigger("appendCache");
      });
      if(table.config.debug) { $.tablesorter.benchmark("Applied Live Select", time); }
    }
  });	
});