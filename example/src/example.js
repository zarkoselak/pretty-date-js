'use strict';

var prettyDate = require('../../index.js');
var date = "2016-06-08T07:10:00";

var options = {
	// lang: {
	// 	seconds: ['seconde', 'secondes'],
	// 	minutes: ['minute', 'minutes'],
	// 	//hours: ['heure', 'heures'],
	// 	//days: ['journée', 'journées'],
	// 	months: ['mois', 'mois'],
	// 	years: ['an', 'années'],
	// 	//misc: ['Il y a', 'Invalid input, please check formating']
	// }
};

var myDate = prettyDate(date, options);
document.querySelector(".pretty-date").innerHTML = myDate.misc + ' ' + myDate.value + ' ' + myDate.lang;