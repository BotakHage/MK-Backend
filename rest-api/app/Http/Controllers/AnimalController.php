<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    private array $animals = ['Kucing','Ayam','Ikan'];

    public function index()
    {
        echo "Menampilkan data animal: \n";
        foreach ($this->animals as $animal)
        {
            echo "$animal\n";
        }
    }

    public function store(Request $request)
    {
        echo "Menambahkan hewan baru:\n";
        $this->animals[] = $request->nama;
        $this->index();
    }

    public function update(Request $request, $id)
    {
        echo "Mengubah data animal id $id\n";
        echo "Nama hewan: ";
        $this->animals[$id] = $request->nama;
        $this->index();
    }

    public function destroy($id)
    {
        echo "Menghapus data animal id $id\n";
        unset($this->animals[$id]);
        $this->index();
    }
}