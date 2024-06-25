const express = require('express')
const router = express.Router()
const routerUser = require('./controllers/UserController')
const routerImage = require('./controllers/ImageController')

router.use(routerUser)
router.use(routerImage)

module.exports = router
