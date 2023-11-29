const Component = require('../Components/factory/index')
const Semester = require('../models/Semester')

const semester_getOne = Component.getOne(Semester)
const semester_getAll = Component.getAll(Semester)
const semester_createOne = Component.createOne(Semester)
const semester_update = Component.update(Semester)
const semester_removeOne = Component.removeOne(Semester)

module.exports = {
    semester_getOne,
    semester_getAll,
    semester_createOne,
    semester_update,
    semester_removeOne
}