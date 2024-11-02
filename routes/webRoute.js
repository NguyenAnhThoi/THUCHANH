// routes/webRoute.js
import express from 'express';
import { renderHome } from '../controllers/HomeController.js';
import { renderAbout } from '../controllers/AboutController.js';
import { renderContact } from '../controllers/ContactController.js';
import * as UserController from '../controllers/UserController.js';

const router = express.Router();

router.get('/', renderHome);
router.get('/about', renderAbout);
router.get('/contact', renderContact);
router.get('/user', UserController.getUser);

export default router;