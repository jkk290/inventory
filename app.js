require('dotenv').config();
const express = require('express');
const appRouter = require('./routes/appRouter');

const app = express();
const PORT = process.env.APP_PORT;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.use('/', appRouter);

app.listen(PORT, () => console.log (`Inventory app listening on port ${PORT}`));

