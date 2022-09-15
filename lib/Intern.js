const Employee = require('./Employee');

// ES6 class
class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

     // get role for specific person, in this case overriden to intern
     getRole() {
        return 'Intern';
    }

}
// exports js
module.exports = Intern;