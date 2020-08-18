const fs = require('fs');
const {promisify} = require('util');
const { connected } = require('process');
const readFileAsync = promisify(fs.readFile);

const mostFrequentWord = (text) => {
  const words = text.toLowerCase().match(/[^_\W]+/g);
  const tally = {};
  let mostFrequentWord = null;
  
  words.forEach(word => {
    tally[word] = (tally[word] || 0) + 1 ;
    if(!tally[mostFrequentWord] || tally[word] > tally[mostFrequentWord])
      mostFrequentWord = word;
  });
  return (mostFrequentWord) ;
}

const findPassword = async () => {
  try{const poem1 = await readFileAsync("poems/starting-poem.txt", "utf-8");
  const poem1FileName = `poems/${mostFrequentWord(poem1)}.txt`;
  // console.log(poem1FileName)

  const poem2 = await readFileAsync(poem1FileName, "utf-8");
  const poem2FileName = `poems/${mostFrequentWord(poem2)}.txt`;
  // console.log(poem2FileName)

  
  const poem3 = await readFileAsync(poem2FileName, "utf-8");
  const poem3FileName = `poems/${mostFrequentWord(poem3)}.txt`;
  // console.log(poem3FileName)

  const secretPass = poem3FileName;

  console.log( "secret password: ", secretPass)
} catch {
  console.log("error")
}

  
 
}

findPassword();

