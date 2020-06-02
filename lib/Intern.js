const Employee = require("./lib/Employee")

class Intern extends Employee {
    constructor(name, school) {
        super(name, email, id, role)
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        if (this.school === true) {
            return Intern;
        };
    };
};
module.exports = Intern;