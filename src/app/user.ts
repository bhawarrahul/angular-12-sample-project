export class User {
  private id: Number;
  private name: string;
  private mobile: Number;
  private address: string;
  public constructor(
    id: Number,
    name: string,
    mobile: Number,
    address: string
  ) {
    this.id = id;
    this.name = name;
    this.mobile = mobile;
    this.address = address;
  }
  public getId() {
    return this.id;
  }
  public getName() {
    return this.name;
  }
  public getMobile() {
    return this.mobile;
  }
  public getAddress() {
    return this.address;
  }
}
