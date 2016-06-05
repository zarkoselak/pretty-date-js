'use strict';

var prettyDate = require('../lib/index.js');

var options = {
	lang: {
		seconds: ['second', 'seconds'],
		minutes: ['minute', 'minutes'],
		hours: ['hour', 'hours'],
		days: ['day', 'days'],
		months: ['month', 'months'],
		years: ['year', 'years'],
		misc: ['ago']
	}
}

var myDate = prettyDate("2012-03-25", options);

document.querySelector(".pretty-date").innerHTML = myDate.value + myDate.lang;