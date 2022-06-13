function lineupStudents(students) {
  return students.split(" ").sort((a, b) => {
    if (b.length == a.length) {
      return b.localeCompare(a);
    }
    return b.length - a.length;
  });
}

// Test cases
let string = "Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi";

let string2 = "xxa xxb xxc xxd xa xb xc xd";

let test1 = lineupStudents(string);
let test2 = lineupStudents(string2);

console.log(test1);
console.log(test2);
