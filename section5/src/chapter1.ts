/**
 * 인터페이스의 확장 or 상속
 */

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  // name: "hello";
  name: string;
  isBark: boolean;
}

// 상속을 받을 때 property를 다시 정의할 수 있다.
// 규칙 : 다시 정의한 타입은 원본 타입의 서브타입이어야한다.
const dog: Dog = {
  // name: "hello",
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = { name: "", color: "", isBark: true, isScratch: true };
