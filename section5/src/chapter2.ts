/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  // name: number; 동일한 것을 다른 타입으로 중복 정의하면 오류가난다. => 반드시 동일한 타입이어야한다.
  age: number;
}

const person: Person = {
  name: "",
  age: 31,
};

/**
 * 모듈 보강
 */
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello", // 추가해주고 싶을때 모듈보강
};
