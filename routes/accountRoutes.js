const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

// Route để tạo tài khoản mới
router.post('/accounts', accountController.createAccount);

// Route để xóa tài khoản
router.delete('/accounts/:id', accountController.deleteAccount);

module.exports = router;
