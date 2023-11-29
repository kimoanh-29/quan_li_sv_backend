const Component = require('../Components/factory/index')
const User = require('../models/User')

const user_getOne = Component.getOne(User)
const user_getAll = Component.getAll(User)
const user_createOne = Component.createOne(User)
const user_update = Component.update(User)
const user_removeOne = Component.removeOne(User)

module.exports = {
    user_getOne,
    user_getAll,
    user_createOne,
    user_update,
    user_removeOne
}