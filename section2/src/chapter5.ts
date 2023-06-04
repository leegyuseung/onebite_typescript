// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// enum은 컴파일을 해도 사라지지 않는다.
enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korea = "ko",
  english = "en",
}

const user1 = {
  name: "홍길동",
  role: Role.ADMIN, // 0 <-관리자
  language: Language.korea,
};

const user2 = {
  name: "김길동",
  role: Role.USER, // 1 <- 일반유저
};

const user3 = {
  name: "이길동",
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3);
