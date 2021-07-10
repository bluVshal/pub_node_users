const db = require('../db');
const config = require('../config');

async function getUsers(){
  const rows = await db.query(
    `SELECT *
    FROM users`
  );

  return {
      rows
  }
}

async function getUsersById(id){
  const rows = await db.query(
    'SELECT * FROM users WHERE idusers =' + id
  );

  return {
      rows
  }
}

async function getUsersByParams(username){
  const rows = await db.query(
    `SELECT * FROM users WHERE uname = ?`,[username.uname]
  );
  return {
      rows
  }
}

module.exports = {
    getUsers,
    getUsersById,
    getUsersByParams
}