const express = require('express');
const router = express.Router();
const semesterComponent = require('../app/Components/semesterComponent')

router.get('/:id',semesterComponent.semester_getOne)
router.post('/',semesterComponent.semester_createOne)
router.get('/',semesterComponent.semester_getAll)
router.patch('/:id',semesterComponent.semester_update)
router.delete('/:id',semesterComponent.semester_removeOne)

module.exports = router