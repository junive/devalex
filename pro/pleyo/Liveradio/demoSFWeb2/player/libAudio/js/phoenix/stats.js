

var stat_report = Class.create();
stat_report.prototype = {
  initialize: function(refresh_time) {
    this.current_id = 0;
    this.start_time = 0;
    this.report = [];
    new PeriodicalExecuter(this.flush.bindAsEventListener(this), refresh_time);
  },
  
  get_time_of_day: function() {
    return (new Date()).getTime();
  },
  
  set_id: function(id) {
		spy('report: set_id ' + id);
    this.current_id = id;
  },
  
  start_listening: function() {
		spy('report: start');
    this.start_time = this.get_time_of_day();
  },
  
  stop_listening: function() {
		spy('report: stop');
    if(this.start_time > 0) {
      var interval = Math.round((this.get_time_of_day() - this.start_time)/1000);
      this.report.push($H({ id: this.current_id, duration: interval }));
      this.start_time = 0;
    }
  },
  
  flush: function() {
    spy('flush');
    // if we're listening to something, include it in the report
    if(this.start_time>0) {
      this.stop_listening();
      this.start_listening();
    }
    
    var header = '';
    $A(this.report).each(function(entry) {
      header += entry.id + ':1:200:' + entry.duration + ',';
    });
    
    if(header.length>0) {
      spy('report: ' + header);
      query_phoenix({ WRequest: 'DateTime', 'HTTP_device_items': header });
    }
    
    this.report = [];
  }
};

