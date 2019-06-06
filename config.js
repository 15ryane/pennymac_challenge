const txtConfig = {
  weather: {
    charStartOffset: 3,
    charEndOffset: 16,
    lineStartOffset: 5,
    lineEndOffset: 2
  },
  soccer: {
    charStartOffset: 8,
    charEndOffset: 54,
    lineStartOffset: 2,
    lineEndOffset: 1,
  }
}

const calcDiffConfig = {
  weather: {
    identIdx: 0,
    firstIdx: 1,
    secondIdx: 2
  },
  soccer: {
    identIdx: 0,
    firstIdx: 7,
    secondIdx: 5
  }
}

const keywordConfig = {
  MMU: "weather",
  Team: "soccer"
}

module.exports = {
  keywordConfig,
  calcDiffConfig,
  txtConfig
}