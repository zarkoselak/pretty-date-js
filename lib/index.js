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

    var time = [
      {
        value: years % 12,
        lang: options.lang.year
      },
      {
        value: months % 30,
        lang: options.lang.month
      },
      {
        value: days % 24,
        lang: options.lang.day
      },
      {
        value: hours % 60,
        lang: options.lang.hour
      },
      {
        value: minutes % 60,
        lang: options.lang.minute 
      },
      {
        value: seconds % 60,
        lang: options.lang.second
      }
    ];

    return datePrettify(time);
  }

  function datePrettify (time) {
    var data;
    for (var i = 0; i < time.length; i++) {
      if (!!time[i].value) {
        data = {
          value: time[i].value,
          lang: time[i].value > 1 ? time[i].lang[1]: time[i].lang[0]
        };
        break;
      } else {
        data = {
          value: '',
          lang: 'just now'
        };
      }
    }
    return data;
  }

  return prettyDate;
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = prettyDate;
}
