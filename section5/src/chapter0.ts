/**
 * 인터페이스
 * 인터페이스 앞에는 I를 붙이는 경우가 많다. -> 헝가리한 표기법 -> 안붙이는 것을 선호한다.
 */

interface Person {
  readonly name: string;
  age?: number;
  // sayHi: () => void;
  // sayHi: (a:number, b:number) => void;
  // 호출 시그니처를 사용해야 param 2개 가능하다
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

// type Func = {
//   (): void;
// };

// const func: Func = () => {};

// 인터페이스는 유니온이나 인터섹션 불가능해서 타입별칭이나 타입주석에 활용해야한다.
// type Type1 = number | string;
// type Type2 = number & string;

const person: Person = {
  name: "james",
  sayHi: function () {
    console.log("Hi");
  },
};

// person.name = 'james2'

person.sayHi();
person.sayHi(1, 2);
