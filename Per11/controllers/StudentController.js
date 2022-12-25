// import Model Student
const Student = require('../models/Student');

//buat class StudentController
class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    const data = {
      message: 'Menampilkkan semua students',
      data: students,
    };

    res.json(data);
  }

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    // code here
    const { nama } = req.body;
    const { nim } = req.body;
    const { email } = req.body;
    const { jurusan } = req.body;

    const students = await Student.create(nama, nim, email, jurusan);

    const data = {
      message: 'Menambahkan data student',
      data: students,
    };

    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: [],
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;
    const data = {
      message: `Menghapus student id ${id}`,
      data: [],
    };

    res.json(data);
  }
}

//membuat objek StudentController
const object = new StudentController();

//export StudentController
module.exports = object;
