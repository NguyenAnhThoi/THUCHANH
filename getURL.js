<<<<<<< HEAD
import url from 'url';
=======
var url = require('url');
>>>>>>> c77dde6cf59b2a482e14f1942d5e67dec7da4de7
const getPath = (req) => {
    return req.url;
} 
const getParamsURL = (req) => {
    let urlData = url.parse(req.url, true);
    return JSON.stringify(urlData.query);
}
export default { getPath, getParamsURL };