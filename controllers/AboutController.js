// AboutController.js
export const renderAbout = (req, res) => {
    const username = req.session.username;
    res.render('about', {content: 'Thông tin về chúng tôi', title: 'Về chúng tôi',username });
};