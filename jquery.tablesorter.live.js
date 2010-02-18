jQuery(function($) {
  $.tablesorter.addParser({
    id: 'text-select',
    is: function(s) {
      // return false so this parser is not auto detected
      return false;
    },
    format: function(s, table, el) {
      var val = $(el).find("select").val().toLowerCase();
      return val;
    },
    type: 'text'
  });
  
  $.tablesorter.addParser({
    id: 'text-input',
    is: function(s) {
      // return false so this parser is not auto detected
      return false;
    },
    format: function(s, table, el) {
      var val = $(el).find(":text").val().toLowerCase();
      return val;
    },
    type: 'text'
  });
  
  $.tablesorter.addParser({
    id: 'checkbox',
    is: function(s) {
      // return false so this parser is not auto detected
      return false;
    },
    format: function(s, table, el) {
      var val = ($(el).find(":checked").length > 0)? 1 : 0
      return val;
    },
    type: 'numeric'
  });
  
  $.tablesorter.addParser({
    id: 'radio',
    is: function(s) {
      // return false so this parser is not auto detected
      return false;
    },
    format: function(s, table, el) {
      var val = ($(el).find(":checked").length > 0)? 1 : 0
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