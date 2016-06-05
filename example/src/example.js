'use strict';

var prettyDate = require('../../lib/index.js');
var date = "2016-06-05T16:00:00";

var options = {
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

var myDate = prettyDate(date, options);

document.querySelector(".pretty-date").innerHTML = myDate.value + ' ' + myDate.lang + ' ago';