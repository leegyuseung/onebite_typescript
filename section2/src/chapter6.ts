// any : 모든, 누구나
// 특정 변수의 타입을 우리가 확실히 모를때
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};
anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// 컴파일시 런타임 오류가 발생한다.
// any type은 최대한 사용하지 않는 것이 좋다.

//unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar 불가능
// unknownVar.toUpperCase() 불가능
if (typeof unknownVar === "number") {
  num = unknownVar; //타입정제, 타입좁히기
}
