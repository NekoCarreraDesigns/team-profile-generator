const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(github) {
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