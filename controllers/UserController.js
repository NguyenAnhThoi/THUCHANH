<<<<<<< HEAD
// userController.js
import * as userModel from '../models/userModel.js';

export const getUsers = async (req, res) => {
    const username = req.session.username;
    const roleid = req.session.roleid;
    
    const rows = roleid !== 1 
        ? await userModel.getUsersByRole(2) 
        : await userModel.getAllUsers();
    
    res.render('home', { content: 'pages/users', users: rows[0], username, roleid });
};

export const getAdmins = async (req, res) => {
    const username = req.session.username;
    const roleid = req.session.roleid;
    const rows = await userModel.getAllUsers();
    
    res.render('home', { content: 'pages/users', users: rows[0], username, roleid });
};

export const getUserById = async (req, res) => {
    const username = req.session.username;
    const user = await userModel.getUserById(req.params.userid);
    
    res.render('home', { content: 'pages/userDetails', user, username });
};

export const getupdateUser = async (req, res) => {
    const username = req.session.username;
    const user = await userModel.getUserById(req.params.userid);
    
    res.render('home', { content: 'pages/updateUser', user, username });
};

export const updateUser = async (req, res) => {
    await userModel.updateUserById(req.params.userid, req.body);
    res.redirect('/users');
};

export const deleteUser = async (req, res) => {
    await userModel.deleteUserById(req.params.userid);
    res.redirect('/users');
};

export const renderCreateUser = (req, res) => {
    const username = req.session.username;
    res.render('home', { content: 'pages/userAdds', username });
};

export const createUser = async (req, res) => {
    await userModel.createUser(req.body);
    res.redirect('/users');
};

export const apiGetUsers = async (req, res) => {
    const rows = await userModel.apiGetAllUsers();
    res.json(rows);
};

export const apiGetUserById = async (req, res) => {
    const user = await userModel.apiGetUserById(req.params.userid);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
};

export const apiCreateUser = async (req, res) => {
    await userModel.createUser(req.body);
    res.status(201).json({ message: 'User created successfully' });
};

export const apiUpdateUser = async (req, res) => {
    await userModel.apiUpdateUserById(req.params.userid, req.body);
    res.json({ message: 'User updated successfully' });
};

export const apiDeleteUser = async (req, res) => {
    await userModel.apiDeleteUserById(req.params.userid);
    res.json({ message: 'User deleted successfully' });
};

export const apiLogin = async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.getUserByUsername(username);
    
    if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    req.session.username = username;
    res.json({ message: 'Login successful' });
};

export const apiLogout = (req, res) => {
    req.session.destroy();
    res.json({ message: 'Logout successful' });
};
=======
import db from '../config/db.js';

export const getUser = async (req, res) => {
    const username = req.session.username;
    const [rows] = await db.query('SELECT * FROM users');
    res.render('user', { user:rows , title: 'Người dùng', username } );
}
export const renderUseradd = async (req, res) => {
    const username = req.session.username;
    res.render('add', {title: 'Thêm người dùng', username});
};

export const usersAdd = async (req, res) => {
    const { username, password, fullname, address, sex, email } = req.body;

        // Thêm người dùng mới
        await db.query('INSERT INTO users (username, password, fullname, address, sex, email) VALUES (?, ?, ?, ?, ?, ?)', 
            [username, password, fullname, address, sex, email]);

        res.redirect('/user'); // Chuyển hướng đến trang danh sách người dùng
};
export const renderUserEdit = async (req, res) => {
    const username = req.session.username;
    const userId = req.params.id;

    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [userId]);

    res.render('edit', { user: rows[0], title: 'Chỉnh sửa người dùng', username });
};

export const edituser = async (req, res) => {
    const userId = req.params.id;
    const { username, fullname, address, sex, email } = req.body;

        // Cập nhật thông tin người dùng
        await db.query('UPDATE users SET username = ?, fullname = ?, address = ?, sex = ?, email = ? WHERE id = ?', 
            [username, fullname, address, sex, email, userId]);

        res.redirect('/user'); // Chuyển hướng đến trang danh sách người dùng
    
};
export const renderDelete = async (req, res) => {
    const userId = req.params.id;

        // Xóa người dùng theo ID
        await db.query('DELETE FROM users WHERE id = ?', [userId]);
        res.redirect('/user'); // Chuyển hướng đến trang danh sách người dùng
    
};
>>>>>>> c77dde6cf59b2a482e14f1942d5e67dec7da4de7
