const express = require('express');
const router = express.Router();
const planComponent = require('../app/Components/planComponent')

// router.get('/:id',planComponent.plan_getOne)
router.post('/',planComponent.plan_createOne)
router.get('/:id',planComponent.plan_getAll)
router.patch('/update',planComponent.plan_update)
router.delete('/:id',planComponent.plan_removeOne)

module.exports = router