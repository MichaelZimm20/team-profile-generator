const Employee = require('./Employee');

// ES6 class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // calling Employee parent class
        super(name,id,email);

        this.github = github;
    }
    // get Engineer github username
    getGitHub() {
        return this.github;
    }

    // Overridden to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
}
// exports js
module.exports = Engineer;