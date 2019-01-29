
module objects{
    export class Student extends objects.Person{
    //private instance varuables
    private _studentID: string;

    //public properties
    get studentID(): string{
        return this._studentID;
    }
    set studentID(newID: string) {
        this._studentID = newID;
    }

    //constructor
    constructor(age: number, name: string, studentID:string) {
        super(age, name);

        this.studentID = studentID;
    }
    //private methods

    //publuc mthods
    public studies(): void{
        console.log(`${this.name} is studyig and has a student ID of ${this._studentID}`);

    }
}
}
