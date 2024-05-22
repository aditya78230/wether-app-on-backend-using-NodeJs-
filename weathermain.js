var weather = require("./weather.js");
var findCurr = require("./location.js");
var argv = require("yargs")
    .option("loc", {
        alias: 'l',
        demand: false,
        type: "string",
        description: 'Enter city to get weather'
    })
    .option("curr", {
        alias: 'c',
        demand: false,
        type: "boolean",
        description: 'Get weather for current location'
    })
    .help("help").argv;
  if (argv.curr) {
    
    findCurr(function (currInfo) {
        console.log(currInfo);
    });
} else if (argv.loc) {
   
    weather(argv.loc, function (currentWeather) {
        console.log(currentWeather);
    });
} else {
    console.error('Please specify a location or use --curr option for current location weather.');
}