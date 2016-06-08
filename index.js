var prettyDate = (function() {
  'use strict';

  function deepExtend(obj1, obj2) {
    for (var prop in obj2) {
      try {
        if ( obj2[prop].constructor === Object) {
          obj1[prop] = deepExtend(obj1[prop], obj2[prop])
        } else if (obj1.hasOwnProperty(prop)) {
          obj1[prop] = obj2[prop];
        }
      } catch(e) {
        obj1[prop] = obj2[prop];
      }
    }
    return obj1;
  }

  function prettyDate(dateParam, options) {
    var date = new Date(dateParam).getTime();
    var defaults = {
      lang: {
        seconds: ['just now', 'seconds'],
        minutes: ['minute', 'minutes'],
        hours: ['hour', 'hours'],
        days: ['day', 'days'],
        months: ['month', 'months'],
        years: ['year', 'years'],
        misc: ['ago', 'Invalid input, please check formating']
      }
    };

    if (!!options && !!options.lang)
      options = deepExtend(defaults, options);
    else 
      options = defaults;


    if (!!!date)
      return { value: '', lang: '', misc: options.lang.misc[1]};

    var ms      = Date.now() - date;
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

    return datePrettify(time, options);
  }

  function datePrettify (time, options) {
    var data;
    for (var i = 0; i < time.length; i++) {
      if (!!time[i].value) {
        data = { value: time[i].value, lang: time[i].value > 1 ? time[i].lang[1]: time[i].lang[0] , misc: options.lang.misc[0]};
        break;
      } 
    }

    if (!!!data)
      data = { value: '', lang: options.lang.seconds[0]};

    return data;
  }
  return prettyDate;
})();

(function(){
    if (typeof define === 'function' && define.amd)
        define('prettyDate', function () { return prettyDate; });
    else if (typeof module !== 'undefined' && module.exports)
        module.exports = prettyDate;
    else
        window.prettyDate = prettyDate;
})();
