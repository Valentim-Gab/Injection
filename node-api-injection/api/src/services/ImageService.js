const { SQL_INJECTION_ACTIVE } = require('../constants/InjectionConstant.js')
const imageModel = require('../models/ImageModel.js')

const getAll = async () => {
  return await imageModel.getAll()
}

const getAllByUser = async (userId) => {
  return await imageModel.getAllByUser(userId)
}

const get = async (id) => {
  return SQL_INJECTION_ACTIVE
    ? await imageModel.get(id)
    : await imageModel.getSecure(id)
}

const search = async (userId, input) => {
  return SQL_INJECTION_ACTIVE
    ? await imageModel.search(userId, input)
    : await imageModel.searchSecure(userId, input)
}

module.exports = {
  getAll,
  getAllByUser,
  get,
  search,
}
