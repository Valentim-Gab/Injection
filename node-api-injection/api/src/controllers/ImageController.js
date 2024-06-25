const express = require('express')
const router = express.Router()
const imageService = require('../services/ImageService.js')
const route = 'image'

router.get(`/${route}`, async (req, res) => {
  return res.status(200).json(await imageService.getAll())
})

router.get(`/${route}/user/:userId`, async (req, res) => {
  const { userId } = req.params

  return res.status(200).json(await imageService.getAllByUser(userId))
})

router.get(`/${route}/:id`, async (req, res) => {
  const { id } = req.params

  return res.status(200).json(await imageService.get(id))
})

router.get(`/${route}/search/:userId`, async (req, res) => {
  const { userId } = req.params
  const { input } = req.query

  return res.status(200).json(await imageService.search(userId, input))
})

module.exports = router
