class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    getRole() {
        if (this.officeNumber && this.id === true) {
            return Manager;
        };
    };
};
module.exports = Manager;