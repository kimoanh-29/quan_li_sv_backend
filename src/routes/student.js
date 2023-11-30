const express = require('express');
const router = express.Router();
const studentComponent = require('../app/Components/studentComponent')

router.get('/:id',studentComponent.student_getOne)
router.post('/',studentComponent.student_createOne)
router.get('/',studentComponent.student_getAll)
router.patch('/:id',studentComponent.student_update)
router.delete('/:id',studentComponent.student_removeOne)

module.exports = router