class Student {
    constructor() {
        this.students = [
            { Id: 1, Name: "A" }
        ];
    }
    addStudent(student) {
        this.students.push(student);
        return this.students;
    }
    getStudents() {
        return this.students;
    }
}