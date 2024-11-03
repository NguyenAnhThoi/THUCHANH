// ContactController.js
export const renderContact = (req, res) => {
    res.render('contact', { content: 'Thông tin liên hệ', title:'Liên hệ' });
};