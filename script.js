const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Exemple d'API simple
app.get('/hello', (req, res) => {
  res.json({ message: 'Bonjour depuis le backend 🚀' });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
