// AboutController.js
export const renderAbout = (req, res) => {
    res.render('about', {content: 'Thông tin về chúng tôi', title: 'Về chúng tôi' });
};