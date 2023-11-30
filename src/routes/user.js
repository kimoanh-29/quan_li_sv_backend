const express = require('express');
const router = express.Router();
const userComponent = require('../app/Components/userComponent')

router.get('/:id',userComponent.user_getOne)
router.post('/',userComponent.user_createOne)
router.get('/',userComponent.user_getAll)
router.patch('/:id',userComponent.user_update)
router.delete('/:id',userComponent.user_removeOne)

module.exports = router