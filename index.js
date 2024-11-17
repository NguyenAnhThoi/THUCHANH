<<<<<<< HEAD
import http from 'http'
import date from './date'
import getURL from './getURL'

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    res.write(`${date()}<br>`);
    res.write(`${getURL.getPath(req)}<br>`);
    res.write(`${getURL.getParamsURL(req)}<br>`);
    res.write('Hello KTPM0121, chúc bạn thành công với Nodejs nha!!!');
    res.end();
}).listen(8080);
const accountRoutes = require('./routes/accountRoutes');
app.use('/api', accountRoutes);



=======
import http from 'http';
import date from './date.js'; // Đảm bảo rằng có đuôi .js
import * as getURL from './getURL.js'; // Sử dụng import tất cả từ getURL

http.createServer((req, res) => {
    
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(`${date()}<br>`);
    res.write(`${getURL.getPath(req)}<br>`);
    res.write(`${getURL.getParamsURL(req)}<br>`);
    res.write('Hello KTPM0121, chúc bạn thành công  nhoanp!!!');
    res.end();
}).listen(8080, () => {

});
>>>>>>> c77dde6cf59b2a482e14f1942d5e67dec7da4de7
