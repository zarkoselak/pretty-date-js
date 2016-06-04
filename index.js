'use strict';

var prettyDate = (function() {

  function prettyDate(date, options) {
    var ms    = Date.now() - date;
    var seconds = Math.floor(ms / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours   = Math.floor(minutes / 60);
    var days    = Math.floor(hours / 24);
    var months  = Math.floor(days / 30);
    var years   = Math.floor(months / 12);

    return {
      seconds: seconds % 60,
      minutes: minutes % 60,
      hours: hours % 60,
      days: days % 24,
      months: months % 30,
      years: years % 12
    };
  }

    return prettyDate;
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = prettyDate;
}
