/**
 * 첫번째 사례
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

// const [a, b] = swap(1, 2);

const [a, b] = swap("1", 2); // T가 두 개의 타입을 가질 수 없어서 에러발생 -> 제네릭 2개 해주기

/**
 * 두번째 사례
 */
// 데이터가 튜플이면서 첫번째를 T로 해준다.
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue([1, "hello", "myname"]);

/**
 * 세번째 사례
 */

// length가 number를 가지고 있는 타입이어야 허용
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);

let var2 = getLength("11111");

let var3 = getLength({ length: 10 });

// let var4 = getLength(10);
