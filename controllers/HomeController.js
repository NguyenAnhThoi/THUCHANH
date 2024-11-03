// controllers/HomeController.js
export const renderHome = (req, res) => {
    const username = req.session.username;
    res.render('home', { title: 'Trang Chủ', username });
};