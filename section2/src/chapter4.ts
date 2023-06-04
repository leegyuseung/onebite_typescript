// 타입 별칭 -> js에서는 사라진다.
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

// 타입 별칭은 중복된 이름을 사용할 수 없다.
function func() {
  // 함수 안에서는 사용할 수 있다.
  type User = {};
}

let user: User = {
  id: 1,
  name: "홍길동",
  nickname: "Hong",
  birth: "1999.09.09",
  bio: "hiyo",
  location: "서울시",
};

let user2: User = {
  id: 2,
  name: "김길동",
  nickname: "Hong",
  birth: "1999.09.09",
  bio: "hiyo",
  location: "서울시",
};

// 인덱스 시그니처
// 규칙을 위반하지만 않으면 무엇이든 허용한다.
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 꼭 가져야한다, 인덱스 시그니처의 밸류의 타입을 number와 일치하거나 호환해야된다.
};
let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
