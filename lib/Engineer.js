const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // calling Employee parent class
        super(name,id,email)

        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    // Overridden to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;