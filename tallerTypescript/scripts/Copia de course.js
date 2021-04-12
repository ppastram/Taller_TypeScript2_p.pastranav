var Student = /** @class */ (function () {
    function Student(completeName, code, cardId, age, address, phone) 
    {    
        this.name = completeName;
        this.code = code;
        this.id = cardId;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
    return Student;
}());
export { Student };
