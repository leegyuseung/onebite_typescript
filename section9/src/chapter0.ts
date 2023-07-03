/**
 * 조건부 타입
 */

type A = number extends string ? string : number;

// super type
type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

// 참이다
type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces<T>(text: any) {
  if (typeof text === "string") return text.replaceAll(" ", "");
  else return undefined;
}

let result = removeSpaces("hi im james");

let result2 = removeSpaces(undefined);
