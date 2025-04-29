
const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('.'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/activity/config.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'config.json'));
});

app.post('/activity/execute', (req, res) => {
  console.log("Données reçues de SFMC :", req.body);
  res.status(200).json({ status: 'SMS envoyé (simulation)' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur en écoute sur le port ${PORT}`));
