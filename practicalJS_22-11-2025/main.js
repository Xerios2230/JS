function compareStringLength(str1, str2) {
  if (str1.length > str2.length) return 1;
  if (str1.length < str2.length) return -1;
  return 0;
}

function upperFirstChar(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}

function countVowels(str) {
  return (str.match(/[аеєиіїоуюя]/gi) || []).length;
}

//1
console.log(compareStringLength("Hello", "Hi"));

//2
console.log(upperFirstChar("hello"));

//3
console.log(countVowels("Привіт, як справи?"));
