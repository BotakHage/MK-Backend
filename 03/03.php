<?php

# membuat class Animal
class Animal
{
    # property animals

    # method constructor - mengisi data awal
    # parameter: data hewan (array)
    public array $animals = [];
    public function __construct($data)
    {
        $this->animals = $data;
    }

    # method index - menampilkan data animals
    public function index()
    {
        foreach ($this->animals as $key => $animal) {
            echo "index-$key = $animal" . PHP_EOL;
        }
    }

    # method store - menambahkan hewan baru
    # parameter: hewan baru
    public function store($data)
    {
        array_push($this->animals, $data);
    }

    # method update - mengupdate hewan
    # parameter: index dan hewan baru
    public function update($index, $data)
    {
        $this->animals[$index] = $data;
    }

    # method delete - menghapus hewan
    # parameter: index
    public function destroy($index)
    {
        unset($this->animals[$index]);
    }
}

# membuat object
$animal = new Animal(['kucing', 'anjing', 'gajah']);

echo "Index - Menampilkan seluruh hewan \n";
$animal->index();

echo "Store - Menambahkan hewan baru \n";
$animal->store('burung');
$animal->index();

echo "Update - Mengupdate hewan \n";
$animal->update(0, 'Kucing Anggora');
$animal->index();

echo "Destroy - Menghapus hewan \n";
$animal->destroy(1);
$animal->index();

?>