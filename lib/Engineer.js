class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }
    getGithub() {
        console.log(this.github)
    }
    getRole() {
        if (this.github && this.id === true) {
            return Engineer;
        } else {
            return err;
        }
    }
}
module.exports = Engineer;