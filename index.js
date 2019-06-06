
/*
* PennyMac Challenge - Ed Ryan - Jun 5, 2019
* Given a weather data file, output the day number with the smallest temperature spread.
* Given a soccer score data file, output the team with the smallest for-against point differential.
*/

const { textParser }  = require("./parsers/textParser.js");
const { calcMinDiff } = require("./parsers/dataParser.js");

function calculateWeatherDiff() {
  textParser("./data/w_data (5).dat", {
    charStartOffset: 3,
    charEndOffset: 16,
    lineStartOffset: 5,
    lineEndOffset: 2
  })
  .then( weatherData => calcMinDiff(weatherData, {
    identIdx: 0,
    firstIdx: 1,
    secondIdx: 2
  }) )
  .then( result => console.log("The day with the smallest temp spread is Day", result + ".") );
}

function calculateSoccerDiff() {
  textParser("./data/soccer.dat", {
    charStartOffset: 8,
    charEndOffset: 54,
    lineStartOffset: 2,
    lineEndOffset: 1,
  })
  .then( soccerData => calcMinDiff(soccerData, {
    identIdx: 0,
    firstIdx: 7,
    secondIdx: 5
  }) )
  .then( result => console.log("The team with the smallest for-against point differential is", result + ".") );
}

calculateWeatherDiff();
calculateSoccerDiff();
