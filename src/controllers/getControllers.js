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
    `SELECT *
    FROM users
    WHERE idusers = ${id}`
  );

  return {
      rows
  }
}

module.exports = {
    getUsers,
    getUsersById
}