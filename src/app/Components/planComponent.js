const Component = require('../Components/factory/index')
const Plan = require('../models/Plan')

const plan_getOne = Component.getOne(Plan)
const plan_getAll = Component.getAll(Plan)
const plan_createOne = Component.createOne(Plan)
const plan_update = Component.update(Plan)
const plan_removeOne = Component.removeOne(Plan)

module.exports = {
    plan_getOne,
    plan_getAll,
    plan_createOne,
    plan_update,
    plan_removeOne
}