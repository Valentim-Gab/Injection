const express = require('express')
const router = express.Router()
const userService = require('../services/UserService.js')
const route = 'user'

router.get(`/${route}`, async (req, res) => {
  return res.status(200).json(await userService.getAll())
})

router.get(`/${route}/:id`, async (req, res) => {
  const { id } = req.params

  return res.status(200).json(await userService.get(id))
})

router.get(`/${route}/search/:input`, async (req, res) => {
  const { input } = req.params

  return res.status(200).json(await userService.search(input))
})

router.post(`/${route}/login`, async (req, res) => {
  const userLogin = req.body

  return res.status(200).json(await userService.login(userLogin))
})

module.exports = router
