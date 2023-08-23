/*
    -Loop over the longer string
    -Loop over the shorter string
    -If the characters don't match, break out of the inner loop
    -If the characters do match, keep going
    -If you complete the inner loop and find a match, increment the count of matches
    -Return the count
*/

function naiveStringSearch(str, val) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < val.length; j++) {
      if (str[i + j] !== val[j]) {
        break;
      }
      if (j === val.length - 1) {
        count++;
      }
    }
  }

  return count;
}

console.log(naiveStringSearch("wowomgzomg", "omg"));
