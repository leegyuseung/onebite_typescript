/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  //필드
  // private name: string;
  // protected age: number;
  // public position: string;

  //생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  //메서드
  work() {
    console.log("일함");
  }
}

const employee = new Employee("이규승", 31, "devleoper");
// employee.name = "홍길동";
// employee.age = 30;
employee.position = "designer";

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // this.name;
    this.age;
  }
}
