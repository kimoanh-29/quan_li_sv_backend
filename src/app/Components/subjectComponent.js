const Component = require('../Components/factory/index')
const Subject = require('../models/Subject')

const subject_getOne = Component.getOne(Subject)
const subject_getAll = Component.getAll(Subject)
const subject_createOne = Component.createOne(Subject)
const subject_update = Component.update(Subject)
const subject_removeOne = Component.removeOne(Subject)

module.exports = {
    subject_getOne,
    subject_getAll,
    subject_createOne,
    subject_update,
    subject_removeOne
}