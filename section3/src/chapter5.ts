/**
 * 타입 추론
 */

let a = 10;
let b = "hello";

// 초기값을 이용해 추론
let c = {
  id: 1,
  name: "james",
  profile: {
    nickname: "test",
  },
  urls: ["http://www.google.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

// 암묵적인 Any타입 -> 타입이 진화한다.
let d;
d = 10;
d.toFixed();
// d.toUpperCase();
d = "hello";
d.toUpperCase();
// d.toFixed();

// const는 리터럴타입으로 추론
const num = 10;
const str = "hello";

let arr = [1, "string"];
