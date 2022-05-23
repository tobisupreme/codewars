// https://www.codewars.com/kata/5713bc89c82eff33c60009f7

function toFreud(string) {
  let result;
  if (string.length != 0) {
    result = string.split(" ").map((x) => "sex").join(" ");
  } else {
    result = string;
  }
  return result;
}
