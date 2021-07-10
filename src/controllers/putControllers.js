const db = require('../db');
const config = require('../config');

async function modifyUserById(id, exisitingUser){
    const result = await db.query(
        `UPDATE users SET 
            uname=?, 
            password=?, 
            phone=?, 
            address=?, 
            firstname=?, 
            lastname=?, 
            email=?, 
            photo=? 
        WHERE 
            idusers = ?`, 
        [
            exisitingUser.uname, 
            exisitingUser.password, 
            exisitingUser.phone, 
            exisitingUser.address, 
            exisitingUser.firstname, 
            exisitingUser.lastname, 
            exisitingUser.email, 
            exisitingUser.photo,
            id
        ]
    );
    let message = 'Error in updating existing user';

    if (result.affectedRows) {
        message = exisitingUser.uname+' updated successfully';
    }

    return {message};
}

module.exports = {
    modifyUserById
};