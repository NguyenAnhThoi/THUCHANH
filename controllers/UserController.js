import db from '../config/db.js';

export const getUser = async (req, res) => {
    const [rows] = await db.query('SELECT * FROM users');
    res.render('user', { user:rows , title: 'Người dùng' } );
}