<<<<<<< HEAD
export const renderHome = (req, res) => {
    const userid = req.session.userid;
    const username = req.session.username;
    res.render('home', { content: 'pages/main', username, userid});
=======
// controllers/HomeController.js
export const renderHome = (req, res) => {
    const username = req.session.username;
    res.render('home', { title: 'Trang Chủ', username });
>>>>>>> c77dde6cf59b2a482e14f1942d5e67dec7da4de7
};