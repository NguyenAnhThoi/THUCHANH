const { Account } = require('../models');

// Tạo tài khoản mới
exports.createAccount = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
    const newAccount = await Account.create({ username, password });
    res.status(201).json({ message: 'Account created successfully', account: newAccount });
  } catch (error) {
    res.status(500).json({ error: 'Error creating account', details: error.message });
  }
};

// Xóa tài khoản
exports.deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAccount = await Account.destroy({ where: { id } });
    if (deletedAccount) {
      res.status(200).json({ message: 'Account deleted successfully' });
    } else {
      res.status(404).json({ message: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting account', details: error.message });
  }
};
