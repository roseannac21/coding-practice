// character in string with the longest consecutive repetition

const repetition = (str) => {
  const stringSplit = str.split("");

  if (str.length === 0) {
    return ["", 0];
  } else if (str.length === 1) {
    return [str, 1];
  } else {
    let maxDetected = 1;
    let charWithMax = str[0];
    let currChar = str[0];
    let currCount = 1;
    for (let i = 0; i < stringSplit.length - 1; i++) {
      currChar = str[i];
      if (currChar === stringSplit[i + 1]) {
        currCount += 1;
        if (currCount > maxDetected) {
          maxDetected = currCount;
          charWithMax = currChar;
        }
      } else if (currChar !== stringSplit[i + 1]) {
        currCount = 1;
      }
    }
    return [charWithMax, maxDetected];
  }
};

console.log(repetition("hello"));
console.log(repetition("gggyyyyyyrrrrrrvvvvvvvvvvv"));
console.log(repetition("ffffffyystttttttttttwwwvvvvv"));
