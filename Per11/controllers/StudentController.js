// import Model Student
const Student = require('../models/Student');

//buat class StudentController
class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    if (students.length > 0) {
      const data = {
        message: 'Menampilkkan semua students',
        data: students,
      };

      return res.status(200).json(data);
    }
    // else
    const data = {
      message: 'Students is empty',
    };

    return res.status(200).json(data);
  }

  async store(req, res) {
    /**
     * Validasi sederhana
     * menghandle jika salah satu data tidak dikirim
     */
    //destructing object req.body
    const { nama, nim, email, jurusan } = req.body;

    //jika data undefined maka kirim response error
    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: 'Semua data harus dikirim',
      };
      return res.status(422).json(data);
    }

    //else
    //memanggil method create dari Model Student
    const students = await Student.create(req.body);

    const data = {
      message: 'Menambahkan data student',
      data: students,
    };

    return res.status(200).json(data);
  }

  async update(req, res) {
    const { id } = req.params;
    //cari id student yang ingin diupdate
    const student = await Student.find(id);

    if (student) {
      //melakukan update data
      const student = await Student.update(id, req.body);

      const data = {
        message: `Mengedit data student`,
        data: student,
      };

      return res.status(200).json(data);
    }
    //else
    const data = {
      message: 'Student not found',
    };
    return res.status(404).json(data);
  }

  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: 'Menghapus data students',
      };

      return res.status(200).json(data);
    }
    const data = {
      message: 'Student not found',
    };

    return res.status(404).json(data);
  }

  async show(req, res) {
    const { id } = req.params;
    //cari student berdasarkan id
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: 'Menampilkan detail students',
        data: student,
      };

      return res.status(200).json(data);
    }
    const data = {
      message: 'Student not found',
    };

    return res.status(404).json(data);
  }
}

//membuat objek StudentController
const object = new StudentController();

//export StudentController
module.exports = object;
