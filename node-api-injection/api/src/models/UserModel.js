const { client } = require('./Connection')

const getAll = async () => {
  try {
    const res = await client.query(
      `SELECT * FROM users WHERE active = true and priv = false`
    )

    return res.rows
  } catch (err) {
    console.error('Erro ao obter todos os usuários:', err)

    return []
  }
}

const get = async (id) => {
  try {
    const res = await client.query(
      `SELECT * FROM USERS WHERE active = true AND id = ${id}`
    )

    return res.rows[0]
  } catch (err) {
    console.error('Erro ao obter usuário:', err)

    return null
  }
}

const getSecure = async (id) => {
  try {
    const res = await client.query(
      `SELECT * FROM USERS WHERE active = true AND priv = false AND id = $1`,
      [id]
    )

    return res.rows[0]
  } catch (err) {
    console.error('Erro ao obter usuário:', err)

    return null
  }
}

const search = async (input) => {
  try {
    const res = await client.query(
      `SELECT id, name, description FROM users WHERE active = true AND priv = false AND name LIKE '%${input}%'`
    )

    return res.rows
  } catch (err) {
    console.error('Erro ao obter todos os usuários:', err)

    return []
  }
}

const searchSecure = async (input) => {
  try {
    const res = await client.query(
      `SELECT name, description FROM users WHERE active = true AND priv = false AND name LIKE $1`,
      [`%${input}%`]
    )

    return res.rows
  } catch (err) {
    console.error('Erro ao obter todos os usuários:', err)

    return []
  }
}

const login = async (user) => {
  try {
    const res = await client.query(
      `SELECT * FROM users WHERE email = '${user.email}' AND password = '${user.password}'`
    )

    return res.rows[0]
  } catch (err) {
    console.error('Erro ao obter usuário:', err)

    return null
  }
}

const loginSecure = async (user) => {
  try {
    const res = await client.query(
      `SELECT * FROM users WHERE email = $1 AND password = $2`,
      [user.email, user.password]
    )

    return res.rows[0]
  } catch (err) {
    console.error('Erro ao obter usuário:', err)

    return null
  }
}

module.exports = {
  getAll,
  get,
  getSecure,
  search,
  searchSecure,
  login,
  loginSecure,
}
