const { SQL_INJECTION_ACTIVE } = require('../constants/InjectionConstant.js')
const userModel = require('../models/UserModel.js')

const getAll = async () => {
  return await userModel.getAll()
}

const get = async (id) => {
  return SQL_INJECTION_ACTIVE
    ? await userModel.get(id)
    : userModel.getSecure(id)
}

const search = async (input) => {
  return SQL_INJECTION_ACTIVE
    ? await userModel.search(input)
    : userModel.searchSecure(input)
}

const login = async (userLogin) => {
  return SQL_INJECTION_ACTIVE
    ? await userModel.login(userLogin)
    : userModel.loginSecure(userLogin)
}

module.exports = {
  getAll,
  get,
  search,
  login,
}
