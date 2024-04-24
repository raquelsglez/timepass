const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const endRouter = require('./routes/endroute')
const hourMiddleware = require('./middlewares/hourMiddleware');
const validateHour = require('./middlewares/validateHour');

app.use('/', hourMiddleware, indexRouter);
app.use('/endroute', validateHour, endRouter);

app.listen(3000, () => {
  console.log('El servidor está escuchando en el puerto 3000');
});
