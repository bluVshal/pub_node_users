const db = require('../db');
const config = require('../config');

async function addNewUser(newUser){
    const result = await db.query(
        `INSERT INTO users 
        (idusers, uname, password, phone, address, firstname, lastname, email, photo) 
        VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        [
            newUser.idusers, 
            newUser.uname, 
            newUser.password, 
            newUser.phone, 
            newUser.address, 
            newUser.firstname, 
            newUser.lastname, 
            newUser.email, 
            newUser.photo
        ]
    );
    
    let message = 'Error in creating new user';
    
    if (result.affectedRows) {
        message = 'New user created successfully';
    }
    
    return {message};
    
}


module.exports = {
    addNewUser
};