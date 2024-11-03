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