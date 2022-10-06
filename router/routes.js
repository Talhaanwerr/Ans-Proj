const express = require('express')
const router = express.Router();
const authRoutes = require('./auth.route')
// import authRoutes from './auth.route.js'
// import userRoutes from './user.route.js'
// import projectRoutes from './project.route.js'


router.use('/auth', authRoutes);
// router.use('/user', userRoutes);
// router.use('/project', projectRoutes);

module.exports = router