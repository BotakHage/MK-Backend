const students = require('../data/students');

//buat class StudentController
class StudentController {
  index(req, res) {
    const data = {
      message: 'Menampilkan semua data students',
      data: students,
    };
    res.json(data);
  }

  store(req, res) {
    const { nama } = req.body;
    students.push(nama);
    const data = {
      message: `Menambahkan data students: ${nama}`,
      data: students,
    };
    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;
    students[id] = nama;
    const data = {
      message: `Mengedit data students: ${id}, nama ${nama}`,
      data: students,
    };
    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;
    students.splice(id, 1);
    const data = {
      message: `Menghapus data students: ${id}`,
      data: students,
    };
    res.json(data);
  }
}

//membuat objek StudentController
const object = new StudentController();

//export StudentController
module.exports = object;
