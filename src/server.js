const express = require('express');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./userModel'); // Путь к вашему файлу модели

const app = express();
const PORT = process.env.PORT || 1000;

// Подключение к MongoDB (если еще не подключены)
const mongoURI = 'mongodb://myuser:mypassword@localhost:27017/myappdb';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.use(bodyParser.json());

// Пример создания нового пользователя при POST-запросе
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Создание нового пользователя в базе данных
    const newUser = new User({ username, email, password });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/login', async (req, res) => {
    const { username, email, password } = req.body;

    let user;
    if (username) {
      user = await User.findOne({ username });
    } else if (email) {
      user = await User.findOne({ email });
    }

    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }


    return res.status(200).json({ message: 'Ok' });
});



// Слушаем порт сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
