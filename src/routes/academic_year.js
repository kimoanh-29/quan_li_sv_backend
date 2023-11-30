const express = require('express');
const router = express.Router();
const academicComponent = require('../app/Components/academicComponent')

router.get('/:id',academicComponent.academic_getOne)
router.post('/',academicComponent.academic_createOne)
router.get('/',academicComponent.academic_getAll)
router.patch('/:id',academicComponent.academic_update)
router.delete('/:id',academicComponent.academic_removeOne)

module.exports = router