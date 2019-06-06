/**
 * 
 * Calculates the min differential between two columns of a 2D array.
 *
 * @param {Array}  data               Location of file to parse.
 * @param {Object} config             Describes which columns to compare, and what to return to describe the smallest differential.
 * @param {Number} [config.identIdx]  Optional: the column used to identify the row with the smallest differential. If omitted, will return the zero-indexed row.
 * @param {Number} config.firstIdx    The index of the first column to be compared.
 * @param {Number} config.secondIdx   The index of the second column to be compared.
 * 
 * @return {Any}                      Returns a value coorsponding to the given identIdx, representing the row with the smallest diff.
 * 
 */

function calcMinDiff(data, config) {

  let {identIdx, firstIdx, secondIdx} = config;
  let smallestSpread = Infinity;
  let smallestRow = -1;

  for(let i=0; i<data.length; i+=1) {
    if(data[i][firstIdx] && data[i][secondIdx]) {
      // data validation - let's make sure we're taking the difference between Numbers
      // We'll validate by discarding all chars after the first non-numerical char
      let firstNumber  = data[i][firstIdx].match(/[0-9|.]+/)
      let secondNumber = data[i][secondIdx].match(/[0-9|.]+/)
      let currSpread = Math.abs(firstNumber - secondNumber);
      if(currSpread && currSpread < smallestSpread) {
        smallestSpread = currSpread;
        smallestRow = i;
      }
    }
  }

  // If not given a col with which to identify the row with the smallest diff, 
  // give the index of the row instead.
  if(config.identIdx === undefined) return smallestRow;
  return data[smallestRow][identIdx];
}

module.exports = {
  calcMinDiff
}