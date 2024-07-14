import express from 'express'
import loginRoute from './loginRoute.js';
import adminRoute from './adminRoute.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router()

router.use('/admin', authMiddleware, adminRoute)
router.use('/', loginRoute )


export default router