const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');
const AboutController = require('../controllers/AboutController');
const ContactController = require('../controllers/ContactController');

// Route cho trang chủ
router.get('/', HomeController.index);

// Route cho trang Giới thiệu
router.get('/about', AboutController.index);

// Route cho trang Liên hệ
router.get('/contact', ContactController.index);

module.exports = router;
