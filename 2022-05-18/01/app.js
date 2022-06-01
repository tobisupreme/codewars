// https://www.codewars.com/kata/5813d19765d81c592200001a/

function dontGiveMeFive(start, end) {
  let result = [];
  loop: for (let i = start; i <= end; i++) {
    if (String(i).includes("5")) continue loop;
    result.push(i);
  }
  return result.length;
}
