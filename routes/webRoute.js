<<<<<<< HEAD
=======
// routes/webRoute.js
>>>>>>> c77dde6cf59b2a482e14f1942d5e67dec7da4de7
import express from 'express';
import { renderHome } from '../controllers/HomeController.js';
import { renderAbout } from '../controllers/AboutController.js';
import { renderContact } from '../controllers/ContactController.js';
import * as UserController from '../controllers/UserController.js';
import { renderLogin, handleLogin } from '../controllers/LoginController.js';
<<<<<<< HEAD
import { checkAuth, checkAdmin, checkUser } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Routes không yêu cầu đăng nhập
router.get('/', renderHome);
router.get('/home', renderHome);
router.get('/about', renderAbout);
router.get('/contact', renderContact);

// Route cho quản lý người dùng - chỉ cho admin
router.get('/users', UserController.getUsers); // cho user
router.get('/users/:userid', checkUser, UserController.getUserById);

// Route cho tạo người dùng - cho người dùng chưa đăng nhập
router.get('/usersadd', checkAuth, UserController.renderCreateUser); // Cho cả người dùng chưa đăng nhập
router.post('/createuser', UserController.createUser); // Cho cả người dùng chưa đăng nhập

// Route cho cập nhật người dùng - cho user chỉ có thể cập nhật chính họ
router.get('/users/edit/:userid', checkUser, UserController.getupdateUser); // Hiển thị form cập nhật
router.post('/updateUser/:userid', checkUser, UserController.updateUser); // Xử lý cập nhật

// Route cho xóa người dùng - chỉ cho admin
router.get('/users/delete/:id', checkAdmin, UserController.deleteUser); // Chỉ admin

// Route cho đăng nhập
router.get('/login', renderLogin);
router.post('/checklogin', handleLogin);

// API routes
router.get('/api/users', UserController.apiGetUsers);
router.get('/api/users/:id', UserController.apiGetUserById);
router.post('/api/users', UserController.apiCreateUser);
router.put('/api/users/:id', UserController.apiUpdateUser);
router.delete('/api/users/:id', UserController.apiDeleteUser);
router.post('/api/login', UserController.apiLogin);
router.post('/api/logout', UserController.apiLogout);

export default router;
=======
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
>>>>>>> c77dde6cf59b2a482e14f1942d5e67dec7da4de7
