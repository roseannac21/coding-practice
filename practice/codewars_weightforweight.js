//weight for weight

const weightForWeight = (array) => {
  const splitNums = array.map((num) => num.toString().split(""));

  const sumDigits = splitNums.map((arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += Number(arr[i]);
    }
    return total;
  });

  return sumDigits.sort((a, b) => a - b);
};

console.log(weightForWeight([14, 13, 25, 57]));
