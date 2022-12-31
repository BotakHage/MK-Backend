//import StudentController
const StudentController = require('../controllers/StudentController');

//import express
const express = require('express');

//membuat objek router
const router = express.Router();

// Membuat routing
router.get('/', (req, res) => {
  res.send('Hello Express JS');
});

router.get('/students', StudentController.index);

router.post('/students', StudentController.store);

router.put('/students/:id', StudentController.update);

router.delete('/students/:id', StudentController.destroy);

router.get('/students/:id', StudentController.show);

//export router
module.exports = router;
