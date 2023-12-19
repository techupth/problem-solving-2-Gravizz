//Exercise 1: Roman to Integer

const romanToInt = function (s) {
  //Start coding here
  const romanChart = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const romanNumber = s.split("");
  let integer = 0;
  let fontValue = 0;

  for (let i = 0; i < romanNumber.length; i++) {
    let backValue = romanChart[romanNumber[i]];
    if (backValue > fontValue) {
      integer += backValue - 2 * fontValue;
    } else {
      integer += backValue;
    }
    fontValue = backValue;
  }
  return integer;
};

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994

console.log(result1);
console.log(result2);
console.log(result3);
