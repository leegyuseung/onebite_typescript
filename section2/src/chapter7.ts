// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

// return이 없다.
// 반환값에 void를 넣지 않으면 무조건 반환해줘야하기때문에 다른 타입은 사용하지 않는다.
function func2(): void {
  console.log("hello");
}

let a: void;
// a = 1; // 불가능
// a = "hello"; // 불가능
// a = {}; // 불가능
a = undefined; // 가능
// a = null; // strictNullChecks 사용시만 가능

// never
// never -> 존재하지 않는
// 불가능한 타입
// 반환할 수가 없을때는 void타입이아닌 never타입을 써준다.
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

// never 타입은 전부 불가능하다.
let b: never;
// b = 1;
// b = {};
// b = "";
// b = undefined;
// b = null;
// b = anyVar;
