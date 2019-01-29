module objects {
    export abstract class Person {
    //private instance variables
        private _age: number;
        private _name: string;
    
    //public prperties
        get name(): string{
            return this._name;
        }
        set name(newName: string) {
            this._name = newName;
    }
        get age(): number{
            return this._age;
        }
        set age(newAge: number) {
            this._age = newAge;
    }
        constructor(age:number, name:string) {
            this._age = age;
            this._name = name;
        }
    
        //private methods
    
    
        //public methods
        public saysHello():void {
            console.log(`${this.name} says hello`);
    
        }
    
    }
    
    
    }
