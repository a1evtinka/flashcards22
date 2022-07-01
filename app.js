require('dotenv').config();

require('@babel/register');

const express = require('express');
const config = require('./config/config');
const PORT = process.env.PORT ?? 3000;

// Импорт роутеров
const authRouter = require('./routes/auth');
const mainRouter = require('./routes/index');

const app = express();

// Конфигурация сервера
config(app);

// Подключение роутеров

app.use('/auth', authRouter);
app.use('/', mainRouter);
app.use('/scores', require('./routes/score.router'));

app.listen(PORT, async () => console.log('Веб-сервер слушает порт', PORT));
