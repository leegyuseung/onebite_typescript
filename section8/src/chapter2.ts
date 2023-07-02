/**
 * keyof 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

// keyof, typeof
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "james",
  age: 31,
};

getPropertyKey(person, "name");
