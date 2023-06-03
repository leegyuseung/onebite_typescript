// object
// 객체 리터럴 타입
// 구조기준 -> 구조적 타입 시스템 -> Property Based TS
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "홍길동",
};

let dog: { name: string; color: string } = {
  name: "토리",
  color: "brown",
};
user.id;

// ?는 있어도되고 없어도된다는 뜻 -> 있으면 타입은 맞춰줘야한다., 선택적 프로퍼티, optional property라고도 한다.
user = {
  name: "홍두깨",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};
// readonly를 사용하면 값이 절대 수정되지 않는다.
// config.apiKey = "hacked";
