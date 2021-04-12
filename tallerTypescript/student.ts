
export class Student {
  name: string;
  code: number;
  id: number;
  age: number;
  address: string;
  phone:string;

  constructor(completeName: string,code: number, cardId: number, age:number,address:string,phone:string) {
    this.name = completeName;
    this.code = code;
    this.id = cardId;
    this.age = age;
    this.address = address;
    this.phone = phone;
  }
}
