const express = require('express');
const Routes = require('./routes');
const ErrorHandler = require('./Middleware/ErrorHandler');

// ...

const app = express();

app.use(express.json());
app.use(Routes);
app.use(ErrorHandler);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
