const express = require('express')
const router = express.Router()
const { create, getAll, getById, deleteById, updateById } = require('../controllers/post.controller')
const authenticateToken = require('../middleware/authenticate.middleware')


router.post('/', authenticateToken, create);
router.get('/', authenticateToken, getAll);
router.get('/:id', authenticateToken, getById);
router.delete('/:id', authenticateToken, deleteById);
router.patch('/:id', authenticateToken, updateById);



module.exports = router

