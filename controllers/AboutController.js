<<<<<<< HEAD
export const renderAbout = (req, res) => {
    const username = req.session.username;
    res.render('home', { content: 'pages/about', username });
=======
// AboutController.js
export const renderAbout = (req, res) => {
    const username = req.session.username;
    res.render('about', {content: 'Thông tin về chúng tôi', title: 'Về chúng tôi',username });
>>>>>>> c77dde6cf59b2a482e14f1942d5e67dec7da4de7
};