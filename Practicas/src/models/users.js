const Database = require("./database");

class Users extends Database{


    constructor(){
        console.log('user model');
        super();
        this.useCollection('users');
    }
}

module.exports = new Users();