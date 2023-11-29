const Component = require('../Components/factory/index')
const Student_Subject = require('../models/Student_Subject')

const student_subject_getOne = Component.getOne(Student_Subject)
const student_subject_getAll = Component.getAll(Student_Subject)
const student_subject_createOne = Component.createOne(Student_Subject)
const student_subject_update = Component.update(Student_Subject)
const student_subject_removeOne = Component.removeOne(Student_Subject)

module.exports = {
    student_subject_getOne,
    student_subject_getAll,
    student_subject_createOne,
    student_subject_update,
    student_subject_removeOne
}