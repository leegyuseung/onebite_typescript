/**
 * 제네릭 : 모든 타입 두루두루 범용 사용
 */

// value: any로 바꾸면 어떤 곳에서도 사용가능하다. -> 좋지않다
// value: unknown -> 오류를 찾아준다 -> 문제는 어떤 함수도 사용할 수 없다.
// 제네릭으로 해결한다.

// 제네릭 함수 ~ T : 타입변수
function func<T>(value: T): T {
  return value;
}

let num = func(10);
if (typeof num === "number") {
  num.toFixed();
}

let bool = func(true);

let str = func("string");

let arr = func([1, 2, 3]);

let arr2 = func<[number, number, number]>([1, 2, 3]);
