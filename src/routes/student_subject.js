const express = require('express');
const router = express.Router();
const student_subject_Component = require('../app/Components/student_subject_Component')

router.get('/:id',student_subject_Component.student_subject_getOne)
router.post('/',student_subject_Component.student_subject_createOne)
router.get('/',student_subject_Component.student_subject_getAll)
router.patch('/:id',student_subject_Component.student_subject_update)
router.delete('/:id',student_subject_Component.student_subject_removeOne)

module.exports = router