<<<<<<< HEAD
// LoginController.js
import { getUserByUsername } from '../models/loginModel.js';

export const renderLogin = (req, res) => res.render('./login');

export const handleLogin = async (req, res) => {
    const { username, password } = req.body;
    const user = await getUserByUsername(username);  // Gọi hàm ở đây
=======
import db from '../config/db.js';

export const renderLogin = async (req, res) => {
    res.render('login' );
}

export const getUserByUsername = async (username) => {
    const [[user]] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
    return user;
};

export const handleLogin = async (req, res) => {
    const { username, password } = req.body;
    const user = await getUserByUsername(username);
>>>>>>> c77dde6cf59b2a482e14f1942d5e67dec7da4de7

    if (!user) {
        return res.status(404).send("Sai tên tài khoản và mật khẩu");
    }
    if (user.password !== password) {
        return res.status(401).send("Sai mật khẩu");
    }
<<<<<<< HEAD
    req.session.roleid = user.roleid;
    req.session.userid = user.userid;
    req.session.username = username;
    return res.redirect('/home');
};
=======

    req.session.username = username;
    return res.redirect('/');
};
>>>>>>> c77dde6cf59b2a482e14f1942d5e67dec7da4de7
