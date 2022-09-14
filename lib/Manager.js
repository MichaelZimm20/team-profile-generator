const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // calling Employee parent class
        super(name,id,email)

        this.officeNumber = officeNumber;
    }

    // Overridden to return 'Manager'
    getRole() {
        return 'Manager';
    }
}

// exports js
module.exports = Manager;