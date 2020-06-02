const Employee = require("./lib/Employee")

class Engineer extends Employee {
    constructor(name, github) {
        super(role, id, email, name)
        this.github = github;
    }
    getGithub() {
        return this.github
    }
    getRole() {
        if (this.github === true) {
            return Engineer;
        } else {
            return err;
        }
    }
}
module.exports = Engineer;