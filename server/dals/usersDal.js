const db = require("../db/db");
const pool = db.pool;

function getUsers() {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT id,full_name,ip_address,phone_number,city,country
              FROM users
              ORDER BY id ASC
              `,
      function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
      }
    );
  });
}

function findUser(userId) {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT id
              FROM users
              WHERE id = $1
              `,
      [userId],
      function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
      }
    );
  });
}

function addUser(user) {
  const { id, fullName, ipAddress, phoneNumber, city, country } = user;

  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO users (id,full_name,ip_address,phone_number,city,country)
      VALUES ($1,$2,$3,$4,$5,$6)
      RETURNING id`,
      [id, fullName, ipAddress, phoneNumber, city, country],
      function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result.rows[0]);
        }
      }
    );
  });
}

function deleteUser(userId) {
  return new Promise((resolve, reject) => {
    pool.query(
      `
    Delete FROM users
    WHERE id = $1`,
      [userId],
      function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(userId);
        }
      }
    );
  });
}

module.exports = {
  getUsers,
  addUser,
  deleteUser,
  findUser,
};
