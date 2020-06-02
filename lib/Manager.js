const Employee = require("./lib/Employee")

class Manager extends Employee {
    constructor(name, officeNumber) {
        super(name, role, id, email)
        this.officeNumber = officeNumber;
    }
    getRole() {
        if (this.officeNumber === true) {
            return Manager;
        };
    };
};
module.exports = Manager;