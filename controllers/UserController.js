import db from '../config/db.js';

export const getUser = async (req, res) => {
    const [rows] = await db.query('SELECT * FROM user');
    res.render('user', { user:rows , title: 'Người dùng' } );
}