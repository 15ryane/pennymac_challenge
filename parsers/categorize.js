/**
 * 
 * Categorizes the given file.
 * 
 * Looks through the text file for a matching word. If it finds the given word, it returns the word's associated category.
 *
 * @param {String} filePath            Location of file to categorize.
 * @param {Object} keywordConfig       Object of keywords and the categories they represent.
 * 
 * @return {String}                    Returns the category.
 * 
 */

const fs = require('fs');

async function categorize(inputFilePath, keywords) {

  let currWord = "";

  const readStream = fs.createReadStream(inputFilePath,
    { encoding: 'utf8', 
      highWaterMark: 1  // buffer size - stream 1 char at a time
    }
  );

  for await (const chunk of readStream) {
    currWord += chunk;
    if(keywords[currWord]) return keywords[currWord];
    if(chunk.match(/\s/)) {
      currWord = "";
    }
  }

  throw new Error("Could not categorize " + inputFilePath);
}

module.exports = {
  categorize
}

