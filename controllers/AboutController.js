// AboutController.js
export const renderAbout = (req, res) => {
    res.render('about', { title: 'Giới Thiệu', content: 'Thông tin về chúng tôi', title: 'Về chúng tôi' });
};