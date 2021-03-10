export class Player {
  public readonly source: number;
  public readonly name: string;
  private money: number;
  

  constructor(source: number, name: string) {
    this.source = source;
    this.name = name;
  }
}