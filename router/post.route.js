const express = require('express')
const router = express.Router()
const { create, getAll } = require('../controllers/post.controller')
const authenticateToken = require('../middleware/authenticate.middleware')


router.post('/', authenticateToken, create);
router.get('/', authenticateToken, getAll);


module.exports = router

