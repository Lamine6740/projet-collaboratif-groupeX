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
let tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.json({ message: 'Tâche ajoutée', task: newTask });
});
