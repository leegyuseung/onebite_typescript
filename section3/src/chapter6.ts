/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

// as뒤의 타입으로 단언
let person = {} as Person;
person.name = "james";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "토리",
  color: "brown",
  breed: "포메",
} as Dog;

/**
 * 타입 단언의 규칙
 * 각 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;
let num3 = 10 as unknown as string; // 다중단언 -> 정말 어쩔수 없을때만 사용

/**
 * const 단언
 */
let num4 = 10 as const;

//-> readonly가 된다
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// cat.name = ''

/**
 * Non Null 단언
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "홍길동",
};

// ? : 옵셔널체이닝
// number에 undefined값이 들어갈수없다.
// 그래서 !로 대체해주면 그 값이 Null이거나 undefined가 아닐거라고 믿게해준다.
const len: number = post.author!.length;
