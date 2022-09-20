const Employee = require('./Employee');

// ES6 class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // calling Employee parent class
        super(name,id,email);

        this.officeNumber = officeNumber;
    }

    // Overridden to return 'Manager'
    getRole() {
        return 'Manager';
    }
}



// exports js
module.exports = Manager;