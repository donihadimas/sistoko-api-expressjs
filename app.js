const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swagger = require('./swagger')
const todo = require('./routes/todo');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const port = 5000;

app.use(express.json())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

swagger(app)

app.listen(port, () => {
    console.log(`DeHoli SuperApp Backend listening on port  http://localhost:${port}`);
});
module.exports = app;
