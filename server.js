import express from 'express';
import dotenv from 'dotenv/config';
import session from 'express-session';
import viewEngine from './viewEngine.js';
import webRoute from './routes/webRoute.js';

const app = express();
const port = process.env.PORT;

viewEngine(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(webRoute);

<<<<<<< HEAD
app.use((req, res) => {
    return res.send ('404 NOT FOUND');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



=======
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
>>>>>>> c77dde6cf59b2a482e14f1942d5e67dec7da4de7
