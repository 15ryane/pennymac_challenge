
/*
* PennyMac Challenge - Ed Ryan - Jun 5, 2019
* Given a weather data file, output the day number with the smallest temperature spread.
* Given a soccer score data file, output the team with the smallest for-against point differential.
*/

const { textParser  } = require("./parsers/textParser.js");
const { calcMinDiff } = require("./parsers/dataParser.js");
const { categorize  } = require("./parsers/categorize.js");

const { keywordConfig, calcDiffConfig, txtConfig} = require("./config.js")

const fs = require('fs');

/*
*
* For each file in the data folder
*
* 1. Categorize the file. The category determines how we parse information.
* 2. Turn the text file into arrays of useful data.
* 3. Find the difference between specified columns.
* 4. Output a result based on the comparison.
*
*/

fs.readdir("./data", (err, files) => {
  files.forEach(file => {

    const filePath = "./data/" + file;
    let category = "";

    categorize(filePath, keywordConfig) // 1 
    .then (result => {
      category = result;
      return textParser(filePath, txtConfig[category]); // 2
    })
    .then (data => calcMinDiff(data, calcDiffConfig[category]) ) // 3
    .then (result => {
      console.log("\n" + filePath.slice(7), "\nResult:", result, "\n")  // 4
    })
    .catch( err => {
      console.error(err);
    })

  });
});
