/**
 * 분산적인 조건부 타입
 */

// 복습
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

// 유니온이면 조건부가 안된다.

let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> | -> string type
// StringNumberSwitch<string> -> number type
// 그리고 유니온으로 묶는다.

let d: StringNumberSwitch<boolean | number | string>;
// 1단게
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

// 결과
// number | string

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never  |
// boolean

// 결과
// number | never | boolean -> number | boolean
// 유니온에 never가 있으면 never는 사라진다.

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, string>
// Extract<string, string>
// Extract<boolean, string>

// 2단계
// never |
// string |
// never

// 최종결과
// string
