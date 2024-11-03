// routes/webRoute.js
import express from 'express';
import { renderHome } from '../controllers/HomeController.js';
import { renderAbout } from '../controllers/AboutController.js';
import { renderContact } from '../controllers/ContactController.js';
import * as UserController from '../controllers/UserController.js';
import { renderLogin, handleLogin } from '../controllers/LoginController.js';
const router = express.Router();

router.get('/', renderHome);
router.get('/about', renderAbout);
router.get('/contact', renderContact);
router.get('/user', UserController.getUser);
router.get('/login', renderLogin);
router.post('/checklogin', handleLogin);

router.get('/usersadd', UserController.renderUseradd);
router.post('/adduser', UserController.usersAdd);

router.get('/edituser/:id', UserController.renderUserEdit);
router.post('/useredit/:id', UserController.edituser);

router.get('/usersdelete/:id', UserController.renderDelete);
export default router;
