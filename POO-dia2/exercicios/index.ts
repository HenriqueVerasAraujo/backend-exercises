
export class Person {
   protected _name: string;
   protected _birthDate: string;

    constructor(name: string, birthDate: string) {
        this._birthDate = birthDate;
        this._name = name;
    };

    get name() {
        return this._name;
    }

    get birthDate() {
        return this._birthDate;
    }

    set name(name: string) {
        if (name.length > 3) {
            this._name = name;
        } else {
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
        }
    }
}

export class Student extends Person {
    private _enrollment: string = '';
    private _testGrades: number[] = [];
    private _workGrades: number[] = [];

    constructor(name: string, birthDate: string, enrollment: string = '', testGrades: number[] = [], workGrades: number[] = []) {
        super(name, birthDate);
        this._enrollment = enrollment;
        this._testGrades = testGrades;
        this._workGrades = workGrades;
    }
    
    set enrollment(value: string){
        this._enrollment = value;
    };

    set testGrades(value: number[]){
        if (value.length > 4) {
            throw new Error('Máximo de 4 notas');
        } else {
            this._testGrades = value;
        }
    };

    set workGrandes(value: number[]){
        if (value.length > 4) {
            throw new Error('Máximo de 4 notas');
        } else {
            this._workGrades = value;
        }
    };
    
    sumGradesAvg(type: string) {
        if (type === 'tests') {
            const sum = this._testGrades.reduce((sum, curr ) => sum + curr);
            return sum;
        }
    }
}


const newPerson = new Person('testePerson', '10/10/21');
// console.log(newPerson.name);
// newPerson.name = 'cef';
// console.log(newPerson.name);

const newStudent = new Student('myself', '10/10/21');
newStudent.testGrades = [1, 2, 3, 4];
newStudent.sumGradesAvg('tests');
console.log(newStudent.sumGradesAvg('tests'));