/**
 * 인터페이스와 클래스
 */

// 인터페이스 구현은 무조건 Public필드만 정의한다.
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// implement : 구현한다.
class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed}속도로 이동!`);
  }
}
