// inheritance
class Parent {
    constructor() {
        this.fatherName = "Roy";
    }
}
class Child extends Parent {
    constructor(name) {
        super()
        this.name = name;

    }
}
const baby = new Child("arnold");
const baby2 = new Child("aASJKFN");
console.log(baby);
console.log(baby2);