<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    //method index - get all resources
    public function index()
    {
        // menggunakan model student untuk select data
        $students = Student::all();

        $data = [
            'message' => 'Get all student',
            'data' => $students
        ];

        /* menggunakan respons json laravel
        otomatis set header content type json
        otomatis mengubah data array ke JSON
        mengatur status kode */
        return response()->json($data, 200);
    }

    //menambahkan resources
    //membuat method store
    public function store(Request $request)
    {
        //menangkap request
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        //menggunakan Student untuk insert data
        $student = Student::create($input);

        $data = [
            'message' => 'Student is created successfully',
            'data' => $student
        ];

        //mengembalikan data (json) status code 201
        return response()->json($data, 201);
    }

    // update resources
    public function update(Request $request, $id)
    {
        $student = Student::find($id);

        $student->nama = $request->get('nama');
        $student->nim = $request->get('nim');
        $student->email = $request->get('email');
        $student->jurusan = $request->get('jurusan');

        // $student->nama = $request->input('nama') ?? $student->nama;

        // $input = [
        //     'nama' => $request->nama,
        //     'nim' => $request->nim,
        //     'email' => $request->email,
        //     'jurusan' => $request->jurusan
        // ];

        $student->save();

        $data = [
            'message' => 'Student is updated successfully',
            'data' => $student
        ];

        return response()->json($data, 200);
    }

    //delete data with id
    public function destroy($id)
    {
        $student = Student::find($id);
        $student->delete();
        $data = [
            'message' => 'Student has deleted',
        ];

        return response()->json($data, 200);
    }

}
