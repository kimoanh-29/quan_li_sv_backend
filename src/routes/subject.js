const express = require('express');
const router = express.Router();
const subjectComponent = require('../app/Components/subjectComponent')

router.get('/:id',subjectComponent.subject_getOne)
router.post('/',subjectComponent.subject_createOne)
router.get('/',subjectComponent.subject_getAll)
router.patch('/:id',subjectComponent.subject_update)
router.delete('/:id',subjectComponent.subject_removeOne)

module.exports = router