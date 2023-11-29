const Component = require('../Components/factory/index')
const Academic = require('../models/Academic')

const academic_getOne = Component.getOne(Academic)
const academic_getAll = Component.getAll(Academic)
const academic_createOne = Component.createOne(Academic)
const academic_update = Component.update(Academic)
const academic_removeOne = Component.removeOne(Academic)

module.exports = {
    academic_getOne,
    academic_getAll,
    academic_createOne,
    academic_update,
    academic_removeOne
}