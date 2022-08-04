"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Person = void 0;
class Person {
    constructor(name, birthDate) {
        this._birthDate = birthDate;
        this._name = name;
    }
    ;
    get name() {
        return this._name;
    }
    get birthDate() {
        return this._birthDate;
    }
    set name(name) {
        if (name.length > 3) {
            this._name = name;
        }
        else {
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
        }
    }
}
exports.Person = Person;
class Student extends Person {
    constructor(name, birthDate, enrollment = '', testGrades = [], workGrades = []) {
        super(name, birthDate);
        this._enrollment = '';
        this._testGrades = [];
        this._workGrades = [];
        this._enrollment = enrollment;
        this._testGrades = testGrades;
        this._workGrades = workGrades;
    }
    set enrollment(value) {
        this._enrollment = value;
    }
    ;
    set testGrades(value) {
        if (value.length > 4) {
            throw new Error('Máximo de 4 notas');
        }
        else {
            this._testGrades = value;
        }
    }
    ;
    set workGrandes(value) {
        if (value.length > 4) {
            throw new Error('Máximo de 4 notas');
        }
        else {
            this._workGrades = value;
        }
    }
    ;
    sumGradesAvg(type) {
        if (type === 'tests') {
            const sum = this._testGrades.reduce((sum, curr) => sum + curr);
            return sum;
        }
    }
}
exports.Student = Student;
const newPerson = new Person('testePerson', '10/10/21');
// console.log(newPerson.name);
// newPerson.name = 'cef';
// console.log(newPerson.name);
const newStudent = new Student('myself', '10/10/21');
newStudent.testGrades = [1, 2, 3, 4];
newStudent.sumGradesAvg('tests');
console.log(newStudent.sumGradesAvg('tests'));
