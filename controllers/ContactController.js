<<<<<<< HEAD
export const renderContact = (req, res) => {
    const username = req.session.username;
    res.render('home', { content: 'pages/contact', username });
}; 
=======
// ContactController.js
export const renderContact = (req, res) => {
    const username = req.session.username;
    res.render('contact', { content: 'Thông tin liên hệ', title:'Liên hệ',username});
};
>>>>>>> c77dde6cf59b2a482e14f1942d5e67dec7da4de7
