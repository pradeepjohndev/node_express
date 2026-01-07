const express = require('express');

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    console.log(req.host);
    console.log(req.ip);
    console.log(req.method);
    res.send('<h1>Welcome to the Home Page</h1>');
});

app.get('/about', (req, res) => {
    res.sendFile('./docs/about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    res.sendFile('./docs/contact.html', { root: __dirname });
});

app.get('/cont', (req, res) => {
    res.redirect('/contact');
});

app.use((err, res) => {
    res.status(404).sendFile('./docs/404.html', { root: __dirname });
    console.log(err.message);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

