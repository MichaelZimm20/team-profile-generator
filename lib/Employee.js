// ES6 class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = Math.floor(Math.random() * 10 + 190);
        this.email = email;
    }

    getName () {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}


// Exports employee
module.exports = Employee;