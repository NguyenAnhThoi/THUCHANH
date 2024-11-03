// ContactController.js
export const renderContact = (req, res) => {
    const username = req.session.username;
    res.render('contact', { content: 'Thông tin liên hệ', title:'Liên hệ',username});
};