const fs = require('fs');

/**
 * 
 * Parses a text file into a 2D array.
 *
 * Useful for when you want to parse a text file where column data is seperated by whitespace,
 * row data is seperated by carriage return, data is contiguous - which is to say, the 
 * target rows & cols are next to each other.
 *
 * @param {String} inputFilePath            Location of file to parse.
 * @param {Object} [config]                 Optional: Where to begin and end line and char exclusion. When not given, parses whole file.
 * @param {Number} config.charStartOffset
 * @param {Number} config.charEndOffset 
 * @param {Number} config.lineStartOffset 
 * @param {Number} config.lineEndOffset  
 * 
 * @return {Array} Returns a 2D-array of numbers.
 * 
 */

async function textParser(inputFilePath, config) {

  const readStream = fs.createReadStream(inputFilePath,
    { encoding: 'utf8', 
      highWaterMark: 1  // buffer size - stream 1 char at a time
    }
  );

  const output = [];

  let currChar = 0;
  let currLine = 0;
  let currentLine = "";

  // defines the contiguity of the chars and lines we want to parse
  if(config) {
    var {charStartOffset, charEndOffset, lineStartOffset, lineEndOffset} = config;
  } else {
    var charStartOffset = 0;
    var charEndOffset   = 0;
    var lineStartOffset = 0;
    var lineEndOffset   = 0;
  }
  
  // logic for reading and assembling the output
  for await (const chunk of readStream) {
    currChar += 1;
    if(currLine > lineStartOffset && currChar >= charStartOffset && currChar <= charEndOffset) {
        currentLine += chunk;
    } 
    if(chunk.match(/\n/)) {
      if(currLine > lineStartOffset) {
        output.push(currentLine);
      }
      currLine += 1;
      currentLine = "";
      currChar = 0;
    }
  }

  // we can't act on the lineEndOffset until we know how many lines there are
  output.splice(output.length - lineEndOffset);

  // seperate columns by whitespace
  output.forEach( (ele, idx) => {
    output[idx] = ele.match(/\S+/g);
  });

  return output;

}

module.exports = {
  textParser
}
