// controllers/HomeController.js
export const renderHome = (req, res) => {
    res.render('home', { title: 'Trang Chủ' });
};