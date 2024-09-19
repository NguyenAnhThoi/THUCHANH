import express from 'express'
import dotenv from 'dotenv/config'
import myDateTime from './date'
import getURL from './getURL'
const app = express()
const port=process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!.')
    })
app.get('/about', (req, res) => {
res.send('Hello World!. Page about')
})
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
app.get('/date', (req, res) => {
    const date = myDateTime();
    res.send(date);    
})

app.get('/geturl', (req, res) => {
    const getParamsURL = getURL.getParamsURL(req);
    res.send(getParamsURL);
})

app.get('/geturl', (req, res) => {
    const getPath = getURL.getPath(req);
    res.send(getPath);
})