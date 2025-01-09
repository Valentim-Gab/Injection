const { client } = require('./Connection')

const getAll = async () => {
  try {
    const res = await client.query(`SELECT * FROM image WHERE priv = false`)

    return res.rows
  } catch (err) {
    console.error('Erro ao obter todas as imagens:', err)

    return []
  }
}

const getAllByUser = async (userId) => {
  try {
    const res = await client.query(
      `SELECT * FROM image WHERE priv = false AND id_user = $1`,
      [userId]
    )

    return res.rows
  } catch (err) {
    console.error('Erro ao obter todas as imagens do usuário:', err)

    return []
  }
}

const get = async (id) => {
  try {
    const res = await client.query(
      `SELECT * FROM image WHERE priv = false AND id_image = ${id}`
    )

    return res.rows[0]
  } catch (err) {
    console.error('Erro ao obter imagem:', err)

    return null
  }
}

const getSecure = async (id) => {
  try {
    const res = await client.query(
      `SELECT * FROM image WHERE priv = false AND id_image = $1`,
      [id]
    )

    return res.rows[0]
  } catch (err) {
    console.error('Erro ao obter imagem:', err)

    return null
  }
}

// ImageModel.js
const search = async (userId, input) => {
  try {
    const res = await client.query(
      `SELECT title, url_image, id_user FROM image 
      WHERE priv = false AND id_user = ${userId} AND title LIKE '%${input}%'`
    )

    return res.rows
  } catch (err) {
    console.error('Erro ao obter todos os usuários:', err)

    return []
  }
}

const searchSecure = async (userId, input) => {
  try {
    const res = await client.query(
      `SELECT title, url_image, id_user FROM image WHERE priv = false AND id_user = $1 AND title LIKE $2`,
      [userId, `%${input}%`]
    )

    return res.rows
  } catch (err) {
    console.error('Erro ao obter todos os usuários:', err)

    return []
  }
}

module.exports = {
  getAll,
  getAllByUser,
  get,
  getSecure,
  search,
  searchSecure,
}
