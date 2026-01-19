/* const express = require('express');

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

 */

import express from 'express';
const app = express();
const port = 8080;

/* app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.use((req, res) => {
  res.status(404).send('404 - Page not found');
}); */

const arr = [
  { id: 1, name: 'John', role: 'admin' },
  { id: 2, name: 'Jane', role: 'user' },
  { id: 3, name: 'Doe', role: 'admin' },
  { id: null, name: 'pradeep' },
];


app.get('/', (req, res) => {
  res.send({ msg: 'Hello World!' });
});

app.get('/api/users', (req, res) => {
  res.send(arr);
});


app.get('/api/users/:name', (req, res) => {
  const uname = req.params.name;
  const user = arr.find(p => p.name.toLowerCase() === uname.toLowerCase());
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send({ msg: 'User not found' });
  }
});

app.get("/greet", (req, res) => {
  const name = req.query.name || "Guest";
  res.send(`Hello ${name}`);
});

app.get("/search", (req, res) => {
  const { name, age } = req.query;
  res.json({ name: name, age });
});


app.get("/admin", (req, res) => {
  let result = arr;
  //console.log(result);
  if (req.query.role) {
    result = result.filter(u => u.role === req.query.role);
  }

  res.json(result);
});

app.get("/user", (req, res) => {
  try {
    const data = JSON.parse("invalid json");
    res.send(data);
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      error: err,
    });
  }
});


/* app.get("/api/users/:id",(req,res)=>{
  const id = parseInt(req.params.id);
  const notanum = isNaN(id)? res.send({msg: "bad request"}) : id;
  console.log(notanum);

  const user = arr.find(u => u.id === notanum);
  if(user){
    res.status(200).send(user);
  } else {
    res.status(404).send({msg: "User not found"});
  }
}); */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});