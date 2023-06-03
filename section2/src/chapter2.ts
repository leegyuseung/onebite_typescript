// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "gyus"];

// 제네릭 문법
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
// 유니온타입
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 -> 자바스크립트에 없고 타입스크립트에만 있음
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

// 튜플을 사용할 때 배열요소기능을 사용해도 문제가 발생하지 않는다.
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();

// 튜플예시
const users: [string, number][] = [
  ["이순신", 1],
  ["홍길동", 2],
  ["둘리", 3],
  ["고길동", 4],
  // [5,"통키"]
];
