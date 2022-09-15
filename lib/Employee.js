// ES6 class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //get employee's name 
    getName () {
        return this.name;
    }

    // returns employees ID
    getId() {
        return this.id;
    }

    // returns employees email 
    getEmail() {
        return this.email;
    }

    // get role for specific person, in this case employee
    getRole() {
        return 'Employee';
    }
}


// Exports employee
module.exports = Employee;