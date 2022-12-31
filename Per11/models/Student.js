// import database
const db = require('../config/database');

// membuat class Model Student
class Student {
  //Membuat method static all.
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * from students';
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  //Membuat method create
  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      const sql = 'INSERT INTO students SET ?';

      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    //mencari data yang baru di update
    const student = await this.find(id);
    return student;
  }

  //Membuat method update
  static find(id) {
    //melakukan query berdasarkan id
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM students WHERE id = ?';
      db.query(sql, id, (err, results) => {
        //destructing array
        const [student] = results;
        resolve(student);
      });
    });
  }

  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = 'UPDATE students SET ? WHERE id = ?';
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });
    //mencari data yang baru diupdate
    const student = await this.find(id);
    return student;
  }

  //Membuat method delete
  static async delete(id) {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM students WHERE id = ?';
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  //Membuat get by id
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM students WHERE id = ?';
      db.query(sql, id, (err, results) => {
        //destructing array
        const [student] = results;
        resolve(student);
      });
    });
  }

  //end
}

// export class Student
module.exports = Student;
