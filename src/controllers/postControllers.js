const db = require('../db');
const config = require('../config');

async function addNewUser(newUser){
    const getResult = await db.query('SELECT idusers FROM users ORDER BY idusers DESC LIMIT 1'); // get the id of the newest user created
    const newUserId = JSON.parse(JSON.stringify(getResult))[0].idusers + 1; // for automated new id while adding a new user.
    const result = await db.query(
        `INSERT INTO users 
        (idusers, uname, password, phone, address, firstname, lastname, email, photo) 
        VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        [
            newUserId, 
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