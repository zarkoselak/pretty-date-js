'use strict';

var prettyDate = (function() {

  function prettyDate(dateParam, options) {
    var date = new Date(dateParam).getTime();

    if (!!!date)
      return { value: '', lang: options.lang.misc[1]};

    var defaults = {
      lang: {
        seconds: ['second', 'seconds'],
        minutes: ['minute', 'minutes'],
        hours: ['hour', 'hours'],
        days: ['day', 'days'],
        months: ['month', 'months'],
        years: ['year', 'years'],
        misc: ['ago', 'Invalid input, please check formating']
      }
    };


    var ms    = Date.now() - date;
    var seconds = Math.floor(ms / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours   = Math.floor(minutes / 60);
    var days    = Math.floor(hours / 24);
    var months  = Math.floor(days / 30);
    var years   = Math.floor(days / 365);

    var time = [
      {
        value: years,
        lang: options.lang.years
      },
      {
        value: months % 30,
        lang: options.lang.months
      },
      {
        value: days % 24,
        lang: options.lang.days
      },
      {
        value: hours % 60,
        lang: options.lang.hours
      },
      {
        value: minutes % 60,
        lang: options.lang.minutes 
      },
      {
        value: seconds % 60,
        lang: options.lang.seconds
      }
    ];

    return datePrettify(time);
  }

  function datePrettify (time) {
    var data;
    for (var i = 0; i < time.length; i++) {
      if (!!time[i].value) {
        data = { value: time[i].value, lang: time[i].value > 1 ? time[i].lang[1]: time[i].lang[0] };
        break;
      } 
    }

    if (!!!data)
      data = { value: '', lang: 'just now'};

    return data;
  }

  return prettyDate;
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = prettyDate;
}
