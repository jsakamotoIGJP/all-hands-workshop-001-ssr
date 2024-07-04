import { HomePage } from './home.js';
import { AboutPage } from './about.js';

import express from 'express';
const app = express();
app.use(express.static('public'));

const routes = {
    '/': HomePage,
    '/about': AboutPage,
};

app.get('*', (req, res) => {
    const currentPage = routes[req.url];
    const rendered = currentPage?.render() ?? `<h1>404 Not Found</h1>`;
    res.send(rendered);
});

app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001/`);
});
