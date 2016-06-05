# pretty-date-js

#### How to use 

To use pretty-date-js first install it from npm `npm install pretty-date-js`

after module is installed require it in your projects</br>
`var pretty = require('pretty-date-js');`

then just pass date in valid time format 

`var myPrettyDate = pretty("2012-03-25", options);`
```javascript
{ 
	value: 4, 
	lang: "years" 
}
```
##### Date 

For date input use valid date format or timestamp e.g.

###### Full format date
```javascript
pretty("Wed Mar 25 2015 01:00:00 GMT+0100 (W. Europe Standard Time)",options);
```
> "1 year ago"

###### ISO 8601

```javascript
pretty("2015-03-25", options);
```
> "1 year ago"

###### Long Dates
```javascript
pretty("JANUARY, 25, 2015", options);
```
> "1 year ago"

##### Short Dates
```javascript
pretty("03/25/2015", options);
```
> "1 year ago"


If you are not familiar with date formats please read more [here](http://www.w3schools.com/js/js_date_formats.asp)

##### Options 

Use options to override default ENG language settings in module

This is default options object
```javascript
{
	lang: {
		seconds: ["second", "seconds"],
		minutes: ["minute", "minutes"],
		hours: ["hour", "hours"],
		days: ["day", "days"],
		months: ["month", "months"],
		years: ["year", "years"]
		misc: ["ago"]
	}
}
```
You can override it with your language 

```javasript
var options = {
    lang: {
        seconds: ["upravo", "sekundi"], 
        minutes: ["minutu", "minute"],
        hours: ["sat", "sati"]
        ...
        misc: ["prije"]
}
``` 
To get outputs like this:

> EN 1 hour ago <br>
> HR prije 1 sat

 
#### Run example

Enter [example folder](https://github.com/zarkoselak/pretty-date-js/tree/master/example) and run `npm install` to install webpack and webpack-dev-server

For development server run `npm run start` and open<br>
[http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) <br>
in your browser or just run `npm run build` for builing example bundle.

#### Live Demo
Please try [live demo](http://zarkoselak.github.io/pretty-date-js/) 
