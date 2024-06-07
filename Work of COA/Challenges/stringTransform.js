function transformString(str) {
  let length = str.length;
  let transformedStr = str;

  // we check if length is divisible by both 3 and 5

  if (length % 3 === 0 && length % 5 === 0) {
      // we reverse the string
      transformedStr = transformedStr.split('').reverse().join('');
      // we then replace each character with its ASCII code
      transformedStr = transformedStr.split('').map(char => char.charCodeAt(0)).join(' ');
  } else if (length % 3 === 0) {
      // Here we only reverse the string
      transformedStr = transformedStr.split('').reverse().join('');
  } else if (length % 5 === 0) {
      //replace each character with its ASCII code
      transformedStr = transformedStr.split('').map(char => char.charCodeAt(0)).join(' ');
  }

  return transformedStr;
}

// Run codes for different examples
const input1 = "Hello World!";  // Length is 12
console.log(transformString(input1));  // Expected output: "!dlroW olleH"

const input2 = "ABCDE";  // Length is 5
console.log(transformString(input2));  // Expected output: "65 66 67 68 69"

const input3 = "abcdefghij";  // Length is 10 (divisible by 5)
console.log(transformString(input3));  // Expected output: "97 98 99 100 101 102 103 104 105 106"

const input4 = "Hello World";  // Length is 11
console.log(transformString(input4));  // Expected output: "Hello World"

