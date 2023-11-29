const Component = require('../Components/factory/index')
const Student = require('../models/Student')

const student_getOne = Component.getOne(Student)
const student_getAll = Component.getAll(Student)
const student_createOne = Component.createOne(Student)
const student_update = Component.update(Student)
const student_removeOne = Component.removeOne(Student)

module.exports = {
    student_getOne,
    student_getAll,
    student_createOne,
    student_update,
    student_removeOne
}