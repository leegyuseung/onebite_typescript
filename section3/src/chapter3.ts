/**
 * Unknown 타입
 */

function unknownExam() {
  // 업캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // 다운캐스팅
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/**
 * Never 타입
 * 모든 타입에서 서브타입
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운캐스팅
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  // 업캐스팅
  let voidVar: void = undefined;
}

/**
 * any 타입 : 위험한 type
 */

function anyExam() {
  // 모든타입의 슈퍼타입이면서 서브타입이다
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 다운캐스팅인데 any에서는 허용된다.
  anyVar = unknownVar;
  undefinedVar = anyVar;
  // never type으로 다운캐스팅하는것은 any도 불가능
  // neverVar = anyVar;
}
